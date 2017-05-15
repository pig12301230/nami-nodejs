var express = require('express');
var app = express();
var router = express.Router();
var urlMonitor = require('./firebase/url-monitor.js');
app.set('port', (process.env.PORT || 5000));

router.get('/', function(request, response){
  urlMonitor().listen();
});

app.use('/', router);
urlMonitor().listen();

app.listen(app.get('port'), function() {
    console.log('Running on port:', app.get('port'));
});
