var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('idx');
});

app.use(express.static('public'));

app.listen(7000, function () {
    console.log('listening on port 7000');
});
