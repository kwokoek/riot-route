var express = require('express');
var fs = require('fs')

var app = express();

app.set('port', process.env.PORT || 7000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

function getSupportedLanguages() {
  var dir = 'public/languages/';
  var available_languages = { options:[] };
  var lang_files = fs.readdirSync(dir);

  for (var idx in lang_files) {
    var language_file = lang_files[idx];
    // Only care about json files
    if (language_file.indexOf('json') == -1)  {
      continue;
    }

    var file_content = fs.readFileSync(dir+language_file, 'utf8');
    var jsn = JSON.parse(file_content);
    available_languages["options"].push({title: jsn["language"], code: language_file})
  }
  return available_languages;
}  

app.get('/', function (req, res) {
  var indexMap = {};
  indexMap.languageSetting = req.headers["accept-language"] ? req.headers["accept-language"].toString().split(',')[0] : 'en';
  indexMap.languages_supported = JSON.stringify(getSupportedLanguages());
  indexMap.resource_file = JSON.stringify({"question":"Are you something something something?","yes":"Yes!","no":"No!","complete":"Thank you for your response..."});
  res.render('index.ejs', indexMap);
});

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
