var rssSpider = require('rssspider') ;
// var articleRef = require('./cloud-database-helper')('article');
function write(value, index, ar){

  var title = (value.title).replace(/(【|】|#|$|\[|\]|\.)/g, "");
  var articleRef = require('./cloud-database-helper')("Article/" + title);
  articleRef.set({
    title: value.title,
    link: value.link
  });
}
exports.spider = function (url) {
  var datas = []
  rssSpider.fetchRss(url).then(function(data){
    // write to firebase
    // data.forEach(write);
    datas = data
  });
  console.log(datas);
  return datas
}
