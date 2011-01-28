// initialize jo
jo.load();


// The bottom Nav buttons that switch between views
var navButtons = new joOption([
  { title: "Playlists", id: "playlists" },
  { title: "Artists", id: 'artists' },
  { title: "Albums", id: 'albums' },
  { title: "Genres", id: 'genres' },
  { title: 'More...', id: 'more' }
]);
navButtons.setValue(0);
navButtons.selectEvent.subscribe(function(id) {
  console.log(id);
  //mystack.push(joCache.get(id));
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


