var express = require('express');

var app = express();

app.set('port', process.env.PORT || 7000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  var indexMap = {};
  indexMap.languageSetting = req.headers["accept-language"] ? req.headers["accept-language"].toString().split(',')[0] : 'en';
  indexMap.languages_supported = JSON.stringify({"options":[{title:"English", code:"EN"},{title:"Deutsch", code:"DE"},{title:"Esp", code:"ES"}]});
  res.render('index.ejs', indexMap);
});

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
