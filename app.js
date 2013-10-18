/**
 * 
 */
var express = require('express');
var http = require('http');
var path = require('path'),
    jeu = require('./jeu');

var app = express();

app.set('view_engine', 'ejs');
app.set('views',__dirname+'/views');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname + 'public')));
 
app.get('/', function(req, res) {
    
    res.render("index.ejs", { "title" : jeu.listWagons() });
});

var server = http.createServer(app);
 
app.listen(8080);
