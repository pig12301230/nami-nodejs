var request = require("request");
var firebase = require("firebase");
var rssSpider = require("rssspider")
var cheerio = require("cheerio");
var fs = require("fs");
var schedule = require("node-schedule");

var rssUrls = ['http://blog.pixnet.net/rss/atom/jaacnaett'];
var urls = ['http://drugs.pixnet.net/blog/category/1617055', 'http://crystal1983.pixnet.net/blog/category/3879480', 'http://cline1413.pixnet.net/blog/category/5221808'];

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJPhQJ6OxR9lItviD0IToM6c_husJeD8Y",
    authDomain: "test-2170f.firebaseapp.com",
    databaseURL: "https://test-2170f.firebaseio.com",
    projectId: "test-2170f",
    storageBucket: "test-2170f.appspot.com",
    messagingSenderId: "941175026001"
  };
  firebase.initializeApp(config);
  var defaultDatabase = firebase.database();
  // var defaultStorage = firebase.storage();

firebase.auth().signInAnonymously().catch(function(error){
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
});

firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    var uid = user.uid;
    console.log(uid);
  } else {
    console.log("No user");
  }
});

// function writeData(title) {
//   firebase.database().ref(title).set({
//
//   })
// }


// urls.forEach(crawler);
rssUrls.forEach(rssCrawler);

function schedulePerMinute() {
  schedule.scheduleJob("30 * * * * *", function() {
    rssUrls.forEach(rssCrawler);
  })
}

schedulePerMinute()

function crawler(value, index, ar) {
  request(value, function(error, res, body){
    var $ = cheerio.load(body);
    var result = [];
    $("div.article ul li.title h2").each(function(i, elem){
      result.push($(this).text());
    });
    console.log(result);
    fs.writeFileSync("result.json",JSON.stringify(result));
  })
}

  function rssCrawler(value, index, ar) {
    rssSpider.fetchRss(value).then(function(data){
      data.forEach(print);
    });
  }
// ".", "#", "$", "[", or "]"
function print(value, index, ar){
  console.log(index);
  console.log(value.title);
  console.log(value.link);
  var title = (value.title).replace(/(【|】|#|$|\[|\]|\.)/g, "");
  firebase.database().ref("Article/" + title).set({
    title: value.title,
    link: value.link
  });
}

module.exports  = rssUrls.forEach(rssCrawler);
