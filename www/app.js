// initialize jo
jo.load();

var nTunesBase = '/source/1';

// The bottom Nav buttons that switch between views
var navButtons = new joOption([
  { title: "Playlists", id: "playlists" },
  { title: "Artists", id: 'artists' },
  { title: "Albums", id: 'albums' },
  { title: "Genres", id: 'genres' },
  { title: 'More...', id: 'more' }
]);
navButtons.selectEvent.subscribe(function(id) {
  if (id == 'more') {
    // Show 'More' popup window
  } else {
    //mystack.push(joCache.get(id));
    resetStack(id);
  }
});

var toolbar = new joToolbar(navButtons);


var nav = new joNavbar();
var stack = new joStackScroller();

var scrn = new joScreen(
  new joContainer([
    new joFlexcol([
      nav,
      stack
    ]),
    toolbar
  ]).setStyle({
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0"
  })
);
nav.setStack(stack);




var allTracks = '/library playlist/1/track';
var kinds = {
  'playlists': {
    base: '/user playlist',
    api: '/name',
    next: function(sel, index) {
      console.log.apply(console,arguments);      
    }
  },
  'artists': {
    base: allTracks,
    api: '/artist?unique=true',
    next: function(sel) {
      // goto artist's albums
    }
  },
  'albums': {
    base: allTracks,
    api: '/album?unique=true',
    next: function(sel) {

    }
  },
  'genres': {
    base: allTracks,
    api: '/genre?unique=true',
    next: function(sel) {

    }
  }
};

function resetStack(kind) {
  // TODO: Add loading animation?
  var k = kinds[kind];
  jx.load(nTunesBase + k.base + k.api, function(data) {
    var list = new joList(data);
    list.selectEvent.subscribe(function(id) {
      k.next(data[id], id);
    });
    var card = new joCard([
      list
    ]);
    stack.setData([ card ]);
    nav.setTitle(kind);
  }, 'json');
}

function pushStack(kind, val) {
  
}

// Simulate an initial click on the first bar button at the bottom...
navButtons.setValue(0);


