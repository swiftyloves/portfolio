var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/ceremony', function(req, res) {
    res.sendFile(path.join(__dirname+'/ceremony.html'));
});
app.get('/film', function(req, res) {
    res.sendFile(path.join(__dirname+'/film.html'));
});
app.get('/website', function(req, res) {
    res.sendFile(path.join(__dirname+'/website.html'));
});
app.get('/graphics', function(req, res) {
    res.sendFile(path.join(__dirname+'/graphics.html'));
});
app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname+'/game.html'));
});
app.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname+'/resume.html'));
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
