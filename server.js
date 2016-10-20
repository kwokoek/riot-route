var express = require('express'),
  languageHandler = require('./lib/languageHandler.js');

languageHandler.initLanguages();
var app = express();

app.set('port', process.env.PORT || 7000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  var indexMap = {};
  indexMap.languageSetting = req.headers["accept-language"] ? req.headers["accept-language"].toString().split(',')[0] : 'en';
  indexMap.languages_supported = JSON.stringify(languageHandler.getSupportedLanguages());
  indexMap.resource_file = JSON.stringify(languageHandler.getLanguageResource('en'));
  res.render('index.ejs', indexMap);
});

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
