var nTunes = require('nTunes')();

module.exports = require('http').createServer(
  require('stack')(
    require('creationix/log')(),
    require('creationix/static')('/', __dirname + '/www', 'index.html'),
    nTunes
  )
);
