
/** Chargement de modules utilisés. */
var express = require('express')
  , http = require('http')  // serveur http
  , path = require('path')
  , socketio = require('socket.io')  // utilisation du push
  , accueil = require('./routes/accueil')  // routes par defaut
  , jeu = require('./routes/jeu'); // API d'acces au jeu

var app = express();

// le port utilisé est soit la variable d'environnement "PORT" soit 3000
app.set('port', process.env.PORT || 3000);
// les vues seront placées dans le répertoire views
app.set('views', __dirname + '/views');
// utilisation du moteur de templates "ejs"
app.set('view engine', 'ejs');
// definition de l'icone "favicon"
app.use(express.favicon(path.join(__dirname, 'public/img/favicon.ico')));
// affichage des logs pour developpement
app.use(express.logger('dev'));
// analyse le contenu des requetes et fournit req.body
app.use(express.bodyParser());
//  permet l'utilisation de app.put et app.delete
app.use(express.methodOverride());
// utilisation du router pour diriger les requetes
app.use(app.router);
// defini le répertoire contenant le contenu statique
app.use(express.static(path.join(__dirname, 'public')));

// gestion d'erreurs automatique (pour developpement) 
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// page d'accueil
app.get('/', accueil.index);

// creation d'un nouveau joueur
app.post('/nouveauNom/:name', jeu.nouveauJoueur);
// creation d'une nouvelle partie
app.post('/nouvellePartie/:name', jeu.nouvellePartie);
// un joueur rejoint une partie
app.post('/rejoindre/:partie/:joueur', jeu.rejoindre);

// affichage du plateau de jeu de la partie choisi
app.get('/jouer/:partie', jeu.jouer); 
// renvoi les 5 cartes de la pioche visible
app.get('/jeu/:partie/visibles', jeu.visibles); 
// renvoi la définition du plateau de jeu
app.get('/jeu/:partie/map', jeu.map); 
app.get('/jeu/:partie/:joueur/cartes', jeu.cartes); // les cartes (main) du joueur dont le nom est fourni
// le joueur dont le nom est fourni tire une carte de la pioche
app.post('/jeu/:partie/:joueur/pioche/:index', jeu.pioche); 
// le joueur dont le nom est fourni place une route (ligne de chemin de fer)
app.post('/jeu/:partie/:joueur/route/:name', jeu.route); 
// le joueur dont le nom est fourni tire 3 cartes destination
app.post('/jeu/:partie/:joueur/destinations', jeu.destinations); 
// les destinations choisies par le joueur 
// (un joueur peut conserver une partie des cartes destinations seulement)
app.post('/jeu/:partie/:joueur/choixDestinations');

// creation du serveur http
var server = http.createServer(app);

var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// démarrage du serveur http
server.listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
});

