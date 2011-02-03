var Static = require('stack.static');

var nTunes = require('nTunes')();

module.exports = require('http').createServer(
  require('stack')(
    require('connect').logger(),
    Static(__dirname + '/www', { 'default': 'index.html' }),
    nTunes
  )
);
