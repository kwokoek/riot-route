/*
 * Handler for the language resource files
 */
var fs = require('fs')

var supportedLanguages = {};

// Load all the language resource files on disk, and build up in mem map
// to avoid reloading every request
exports.initLanguages = function() {
  var dir = 'public/languages/';
  var lang_files = fs.readdirSync(dir);
  supportedLanguages = {};

  for (var idx in lang_files) {
    var language_file = lang_files[idx];
    // Only care about json files
    if (language_file.indexOf('json') == -1)  {
      continue;
    }

    // strip off the json extension to get the lang code
    var lang_code = language_file.split('.')[0].toLowerCase();
    var file_content = fs.readFileSync(dir+language_file, 'utf8');
    var jsn = JSON.parse(file_content);
    jsn['lang_code'] = lang_code;
    supportedLanguages[lang_code] = jsn;
  }
}  

// The list of available languages for this app
exports.getSupportedLanguages = function() {
  // leverage the preloaded language map to build this view
  var available_languages = { options:[] };
  for(var lang_code in supportedLanguages) {
    var lang_resource = supportedLanguages[lang_code];
    available_languages["options"].push({title: lang_resource["language"], code: lang_code})
  }
  return available_languages;
}

// Retrieve the best match we have to the passed language code
// Will default to EN in this case
exports.getLanguageResource = function(lang_code) {
  if(!lang_code) {
    lang_code = 'en';
  }

  lang_code = lang_code.toLowerCase();

  // If we have an exact lang code match, done!
  if(lang_code in supportedLanguages) {
   return supportedLanguages[lang_code];
  } 
  // If lang_code bigger, perhaps we have a sub match (such as ES-ES matching to ES)
  else if ((lang_code.length > 2) && (lang_code.substring(0,2) in supportedLanguages)) {
   return supportedLanguages[lang_code.substring(0,2)];
  }

  // Fall through to EN
  return supportedLanguages['en'];
}

// Pull the primary language from the request header
// This comes from the client browser
exports.getLanguageCodeFromRequest = function(req) {
  var acceptLanguage = req.headers["accept-language"];

  // Some clients pass this header as an array
  if (acceptLanguage instanceof Array) {
    acceptLanguage = acceptLanguage[0];
  }
  acceptLanguage = acceptLanguage? acceptLanguage.toString().split(',')[0] : 'en';
  return acceptLanguage;
}
