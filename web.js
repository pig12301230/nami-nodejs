var express = require('express');
var app = express();
var router = express.Router();
var test = require('./test.js');
app.set('port', (process.env.PORT || 5000));

router.get('/', function(request, response){
  console.log("test");
  response.send(test);
});

app.use('/', router);

app.listen(app.get('port'), function() {
    console.log('Running on port:', app.get('port'));
});
