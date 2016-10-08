var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/film', function(req, res) {
    res.sendFile(path.join(__dirname+'/film.html'));
});
app.get('/website', function(req, res) {
    res.sendFile(path.join(__dirname+'/website.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
