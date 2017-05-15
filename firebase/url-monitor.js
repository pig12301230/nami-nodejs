function UrlMonitor() {
  this.listen = function() {
    var urlRef = require('./cloud-database-helper')('Url');
    var rss = require('./rss-spider.js');
    urlRef.on('value', function(snapshot){
      //to do rss
      // console.log(snapshot.val());
      // rss.spider(snapshot.val());
    });
    // var rss = require('./rss-spider.js');
    rss.spider("http://blog.pixnet.net/rss/atom/anniething");
    // .then(function(data) {
    //     console.log(data);
    // });
  }
}

module.exports = function() {
  return new UrlMonitor();
}
