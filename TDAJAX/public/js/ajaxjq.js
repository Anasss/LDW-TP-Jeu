$("#btn_ajout_joueur").click(function(){

	var nom = $("#inputNom").val();

	$.ajax({
		type: "POST",
		url: "/nouveauNom/" +nom
	}).done(function(msg) {
		if(msg=="failed")
		console.debug("Erreur existe deja");
		else
			console.debug( "success : un nouveau joueur a été crée - nom : "+ nom );
		
	});

});




$("#creerPartie").click(function(){

$("#pan-body").append("<input type='text'  placeholder='Entrer le nom de la partie' id='inputNomPartie' class='form-control'>" +
		"<a id='btn_nomPartie' onclick='creerNomPartie();'>Ok</a>");

});


function creerNomPartie(){

	var nomPartie = $("#inputNomPartie").val();
alert(nomPartie);

	$.ajax({
		type: "POST",
		url: "/nouvellePartie/" +nomPartie
	}).done(function(msg) {
		if(msg=="failed")
		console.debug("Erreur existe deja");
		else
			console.debug( "success : une nouvelle partie est crée - nom : "+ nomPartie );
		
	});

};

