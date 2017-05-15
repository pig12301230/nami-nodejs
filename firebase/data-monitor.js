function DataMonitor() {
  var articleRef = require('./cloud-database-helper.js')('article/');

  this.listen = function() {
      articleRef.on('value')
  }
}


module.exports = function createService() {
  return new DataMonitor();
}
