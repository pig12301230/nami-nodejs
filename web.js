var express = require('express');
var app = express();

app.use('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Running on port:', app.get('port'));
});
