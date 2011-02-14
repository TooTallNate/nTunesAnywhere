module.load(function() {

  // Available to all modules
  var g = module.main.exports;
  g.nTunesBase = "/source/1";

  // Get references to the 'jo' classes
  jo = g.jo;
  joNavbar = g.joNavbar;
  joStackScroller = g.joStackScroller;
  joToolbar = g.joToolbar;
  joScreen = g.joScreen;
  joContainer = g.joContainer;
  joFlexcol = g.joFlexcol;

  // Initialize 'jo'
  jo.load();

  // Set up the inital UI
  var scn = new joScreen();
  var cont = new joContainer();
  var nav = new joNavbar();
  var flexCol = new joFlexcol();
  var stack = new joStackScroller();
  var toolbar = new joToolbar('this is a footer!')
  flexCol.push(nav);
  flexCol.push(stack);
  cont.push(flexCol);
  cont.push(toolbar);
  scn.push(cont);
  cont.setStyle({
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0"
  });
  nav.setStack(stack);

  //jx.load(globalExports.nTunesBase + '/playlist/1/track/artist?unique=true', function(data) {
    /*var list = new joList(data);
    list.selectEvent.subscribe(function(id) {
      k.next(data[id], id);
    });
    var card = new joCard([
      list
    ]);
    stack.setData([ card ]);
    nav.setTitle(kind);*/
    //console.log(data);
  //}, 'json');

});
