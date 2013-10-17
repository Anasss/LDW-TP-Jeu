/**
 * 
 */

/**
Les
types
(couleurs)
de
wagons
(sans
les
"locomotives").
*/
var wagons = ["blanc","bleu","jaune","noir","orange","rose","rouge","vert"];
/**
Tous
les
types
de
cartes.
*/
var cartes = wagons.concat("locomotive");
var _ = require('underscore');


function Jeu(){
	
this.pioche = [];
this.joueurs = [];
this.visibles = [];
this.started = false;
this.pot = [];
	

}


function joueur(nom){
	
	this.nom = nom;
	this.wagon = 45;
	this.main = [];
	
	
	this.ajoutcarte = function(carte){
		
		this.main.push(carte);
		this.main = _.sortBy(this.main, function (val) {return val;});
	};
	
};

// Equivalente à this.nouveauJoueur sauf que c'est en dehors de la fonction
Jeu.prototype.nouveauJoueur = function (joueur){
	
	
	
	
	
	
	
	
	
	
};

Jeu.prototype.start = function() {
	
	var jeu;
	jeu = new Jeu();
	jeu.nouveauJoueur(new Joueur("Anass"));
	jeu.nouveauJoueur(new Joueur("Alain"));
	jeu.nouveauJoueur(new Joueur("Pierre"));
};

exports.listWagons = function() {
	return wagons;
};