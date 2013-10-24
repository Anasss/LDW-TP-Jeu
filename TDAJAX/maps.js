var maps = {};

maps.Bretagne = {
  fond : '/img/plateau/bretagne-1024.png',
  destinations : [
    { "depart": "auray",
      "arrivee": "Dinan",
      "point" : 8,
      "img" : "aurayDinan.png" },
    { "depart": "baindebretagne",
      "arrivee": "Guimgamp",
      "points" : 11,
      "img" : "baindebretagneGuimgamp.png" },
    { "depart": "baindebretagne",
      "arrivee": "Plouharnel",
      "points" : 7,
      "img" : "baindebretagnePlouharnel.png" },
    { "depart": "belleile",
      "arrivee": "Concarneau",
      "points" : 7,
      "img" : "belleileConcarneau.png" },
    { "depart": "callac",
      "arrivee": "Locmine",
      "points" : 8,
      "img" : "callacLocmine.png" },
    { "depart": "callac",
      "arrivee": "Lorient",
      "points" : 8,
      "img" : "callacLorient.png" },
    { "depart": "chateaulin",
      "arrivee": "Paimpol",
      "points" : 5,
      "img" : "chateaulinPaimpol.png" },
    { "depart": "clisson",
      "arrivee": "Chateaubriant",
      "points" : 5,
      "img" : "clissonChateaubriant.png" },
    { "depart": "clisson",
      "arrivee": "Pornic",
      "points" : 5,
      "img" : "clissonPornic.png" },
    { "depart": "clisson",
      "arrivee": "Vitre",
      "points" : 8,
      "img" : "clissonVitre.png" },
    { "depart": "concarneau",
      "arrivee": "Ouessant",
      "points" : 8,
      "img" : "concarneauOuessant.png" },
    { "depart": "crozon",
      "arrivee": "Stbrieuc",
      "points" : 8,
      "img" : "crozonStbrieuc.png" },
    { "depart": "douarnenez",
      "arrivee": "Lannion",
      "points" : 8,
      "img" : "douarnenezLannion.png" },
    { "depart": "douarnenez",
      "arrivee": "Vitre",
      "points" : 16,
      "img" : "douarnenezVitre.png" },
    { "depart": "fougeres",
      "arrivee": "Ploermel",
      "points" : 7,
      "img" : "fougeresPloermel.png" },
    { "depart": "guimgamp",
      "arrivee": "Quimper",
      "points" : 5,
      "img" : "guimgampQuimper.png" },
    { "depart": "loudeac",
      "arrivee": "Dinan",
      "points" : 6,
      "img" : "loudeacDinan.png" },
    { "depart": "monfortsurmeu",
      "arrivee": "Morlaix",
      "points" : 11,
      "img" : "monfortsurmeuMorlaix.png" },
    { "depart": "montfortsurmeu",
      "arrivee": "Plouharnel",
      "points" : 7,
      "img" : "montfortsurmeuPlouharnel.png" },
    { "depart": "nantes",
      "arrivee": "Fougeres",
      "points" : 8,
      "img" : "nantesFougeres.png" },
    { "depart": "ouessant",
      "arrivee": "Brest",
      "points" : 7,
      "img" : "ouessantBrest.png" },
    { "depart": "paimpol",
      "arrivee": "Clisson",
      "points" : 17,
      "img" : "paimpolClisson.png" },
    { "depart": "paimpol",
      "arrivee": "Douarnenez",
      "points" : 7,
      "img" : "paimpolDouarnenez.png" },
    { "depart": "plougerneau",
      "arrivee": "Crozon",
      "points" : 8,
      "img" : "plougerneauCrozon.png" },
    { "depart": "plougerneau",
      "arrivee": "Lannion",
      "points" : 6,
      "img" : "plougerneauLannion.png" },
    { "depart": "plouharnel",
      "arrivee": "Morlaix",
      "points" : 12,
      "img" : "plouharnelMorlaix.png" },
    { "depart": "pontivy",
      "arrivee": "Carhaix",
      "points" : 6,
      "img" : "pontivyCarhaix.png" },
    { "depart": "pontlabbe",
      "arrivee": "Brest",
      "points" : 6,
      "img" : "pontlabbeBrest.png" },
    { "depart": "pontlabbe",
      "arrivee": "Fougeres",
      "points" : 17,
      "img" : "pontlabbeFougeres.png" },
    { "depart": "pontlabbe",
      "arrivee": "Stmalo",
      "points" : 16,
      "img" : "pontlabbeStmalo.png" },
    { "depart": "pornic",
      "arrivee": "Carhaix",
      "points" : 15,
      "img" : "pornicCarhaix.png" },
    { "depart": "redon",
      "arrivee": "Locmine",
      "points" : 5,
      "img" : "redonLocmine.png" },
    { "depart": "redon",
      "arrivee": "Loudeac",
      "points" : 8,
      "img" : "redonLoudeac.png" },
    { "depart": "rennes",
      "arrivee": "Ancenis",
      "points" : 6,
      "img" : "rennesAncenis.png" },
    { "depart": "rennes",
      "arrivee": "Quimper",
      "points" : 13,
      "img" : "rennesQuimper.png" },
    { "depart": "rennes",
      "arrivee": "Vannes",
      "points" : 7,
      "img" : "rennesVannes.png" },
    { "depart": "stbrieuc",
      "arrivee": "Auray",
      "points" : 6,
      "img" : "stbrieucAuray.png" },
    { "depart": "stmalo",
      "arrivee": "Belleile",
      "points" : 12,
      "img" : "stmaloBelleile.png" },
    { "depart": "stmalo",
      "arrivee": "Chateaubriant",
      "points" : 7,
      "img" : "stmaloChateaubriant.png" },
    { "depart": "stnazaire",
      "arrivee": "Chateaulin",
      "points" : 15,
      "img" : "stnazaireChateaulin.png" },
    { "depart": "stnazaire",
      "arrivee": "Ouessant",
      "points" : 19,
      "img" : "stnazaireOuessant.png" },
    { "depart": "stnazaire",
      "arrivee": "Pontivy",
      "points" : 8,
      "img" : "stnazairePontivy.png" },
    { "depart": "vannes",
      "arrivee": "Pontlabbe",
      "points" : 8,
      "img" : "vannesPontlabbe.png" },
    { "depart": "vitre",
      "arrivee": "Ancenis",
      "points" : 6,
      "img" : "vitreAncenis.png" }],
  tracks : [
    { "nom": "ouessantPlougerneau",
      "ferry": 1,
      "location":  [[ 1.56, 18.29, -66],
		[ 3.81, 12.27, -29.4],
		[ 7.71, 9.59, -2],
		[ 12.5, 9.87, 43]]},
    { "nom": "lannionPlougerneau",          
      "ferry": 2,
      "location":  [[ 16.40, 12.97, -49.2],
		[ 19.63, 8.18, -26.5],
		[ 23.63, 5.50, -20.4],
		[ 27.73, 3.67, 1.5], 
		[ 32.03, 3.67, 11.9], 
		[ 36.23, 4.80, 18.4]]},
    { "nom": "brestPlougerneau", 
      "couleur": "rouge",
      "location":  [		
		[ 10.74, 15.80, -9.2], 
		[ 8.59, 22.00, -74.5], 
		[ 10.35, 21.30, 19.4]
		]},
    { "nom": "morlaixPlougerneau", 
      "couleur": "jaune",
      "location":  [
		[ 17.19, 14.81, 7.9],  
		[ 21.09, 15.51, -7.9],  
		[ 24.90, 14.67, -48.4],  
		[ 28.52, 11.85, 36.3]
		]},
    { "nom": "crozonOuessant",
      "ferry": 1, 
      "location":  [
		[ 2.34, 20.87, 84.0],  
		[ 2.64, 25.95, 18.0],  
		[ 6.45, 27.64, -4.6],  
		[ 10.64, 27.22, 11.9], 
		]},
    { "nom": "crozonPontlabbe", 
      "ferry": 2, 
      "location":  [
		[ 10.25, 30.75, -6.0],  
		[ 6.84, 36.11, -52.5],  
		[ 6.05, 43.02, -83.8],  
		[ 9.28, 48.46, -138.4],  
		[ 13.57, 51.42, -156.2],  
		[ 18.46, 50.44, 167.5]
		]},
    { "nom": "chateaulinCrozon",   
      "couleur": "orange",    
      "location":  [
		[ 21.07, 31.40, 14.4],
		[ 17.07, 29.99, 14.0]
		]},
    { "nom": "douarnenezQuimper", 
      "couleur": "rose",
      "location":  [
		[ 18.72, 37.85, 28.5]
		]},
    { "nom": "pontlabbeQuimper", 
      "couleur": "jaune",
      "location":  [
		[ 19.99, 47.44, -61.4]
		]},
    { "nom": "concarneauQuimper", 
      "couleur": "blanc",
      "location":  [
		[ 23.89, 41.94, 39.8]
		]},
    { "nom": "chateaulinQuimper", 
      "couleur": "noir",
      "location":  [
		[ 22.92, 39.96, -62.1]
		]},
    { "nom": "douarnenezPontlabbe", 
      "couleur": "vert",
      "location":  [
		[ 13.74, 43.35, -51.1],  
		[ 18.42, 48.00, -146.7]
		]},
    { "nom": "lannionMorlaix", 
      "couleur": "vert",
      "location":  [
		[ 33.15, 14.81, -26.6],  
		[ 36.67, 12.27, -41.8]
		]},
    { "nom": "guimgampLannion", 
      "couleur": "noir",
      "location":  [
		[ 41.16, 14.95, -103.6],  
		[ 37.55, 17.91, -40.6],
		[ 40.97, 23.41, -132.8]  
		]},
    { "nom": "lannionPaimpol", 
      "couleur": "rouge",
      "location":  [
		[ 42.14, 7.19, -6.3],  
		[ 46.63, 6.77, 29.4]
		]},
    { "nom": "brestCarhaix", 
      "couleur": "noir",
      "location":  [
		[ 15.67, 22.64, -30.7],  
		[ 19.68, 19.82, 4.5],  
		[ 23.49, 20.10, -17.0],  
		[ 27.98, 18.55, 21.8],  
		[ 31.88, 20.94, 37.5],  
		[ 35.50, 25.18, 64.1]
		]},
    { "nom": "brestChateaulin", 
      "couleur": "blanc",
      "location":  [
		[ 16.16, 24.47, 1.5],  
		[ 20.17, 24.61, -6.0],  
		[ 24.46, 24.05, 16.6],  
		[ 28.86, 27.86, 117.3]
		]},
    { "nom": "callacMorlaix", 
      "couleur": "rose",
      "location":  [
		[ 37.38, 20.17, 36.6],  
		[ 33.77, 16.50, 34.9]
		]},
    { "nom": "callacCarhaix", 
      "couleur": "orange",
      "location":  [
		[ 37.58, 29.51, -47.1]
		]},
    { "nom": "callacGuimgamp1", 
      "location":  [
		[ 42.36, 22.45, -32.8]
		]},
    { "nom": "callacGuimgamp2", 
      "location":  [
		[ 43.05, 24.15, -32.8]
		]},
    { "nom": "guimgampPaimpol", 
      "couleur": "rose",
      "location":  [
		[ 47.54, 16.93, -64.8]
		]},
    { "nom": "carhaixChateaulin", 
      "couleur": "jaune",
      "location":  [
		[ 31.52, 31.68, -7.7],  
		[ 27.13, 32.95, -11.9]
		]},
    { "nom": "carhaixQuimper", 
      "couleur": "rouge",
      "location":  [
		[ 34.55, 38.31, -67.4],  
		[ 31.13, 34.78, 21.8],  
		[ 28.20, 40.85, -68.7],  
		[ 24.39, 40.85, 0.0]]},
    { "nom": "carhaixLoudeacV", 
      "couleur": "vert",
      "location":  [
		[ 50.27, 34.64, 3.0],  
		[ 46.37, 33.79, 7.9],  
		[ 42.56, 32.38, 12.2],  
		[ 38.65, 30.83, 14.7]
		]},
    { "nom": "carhaixLoudeacR", 
      "couleur": "rose",
      "location":  [
		[ 50.18, 36.33, 2.9],  
		[ 46.17, 35.35, 10.4],  
		[ 42.36, 33.94, 15.1],  
		[ 38.36, 32.38, 17.5]
		]},
    { "nom": "concarneauPontlabbe",
      "ferry": 1,  
      "location":  [
		[ 21.27, 49.51, 37.5],  
		[ 24.39, 52.61, -62.1]
		]},
    { "nom": "concarneauLorientN", 
      "couleur": "noir",
      "location":  [
		[ 36.60, 49.99, 38.4],  
		[ 32.21, 48.72, 4.6],  
		[ 28.69, 46.46, 24.4]
		]},
    { "nom": "concarneauLorientO", 
      "couleur": "orange",
      "location":  [
		[ 35.72, 51.26, 38.9],  
		[ 31.33, 50.41, 4.6],  
		[ 27.91, 47.73, 28.6]
		]},
    { "nom": "concarneauPontivy", 
      "couleur": "bleu",
      "location":  [
		[ 46.48, 45.87, -33.3],  
		[ 42.97, 43.61, 25.9],  
		[ 40.43, 39.24, 49.4],  
		[ 35.55, 41.07, -25.9],  
		[ 32.62, 45.73, -49.2],  
		[ 28.91, 44.74, 12.5]
		]},
    { "nom": "paimpolStbrieuc", 
      "couleur": "blanc",
      "location":  [
		[ 54.10, 16.36, 47.1],  
		[ 51.76, 11.57, 55.9]
		]},
    { "nom": "guimgampStbrieuc", 
      "couleur": "bleu",
      "location":  [
		[ 52.15, 22.71, -11.3],  
		[ 48.73, 19.89, 33.3]
		]},
    { "nom": "loudeacStbrieuc", 
      "couleur": "noir",
      "location":  [
		[ 53.81, 27.73, -54.1],  
		[ 54.69, 34.64, -108.0]
		]},
    { "nom": "dinanStbrieuc", 
      "couleur": "orange",
      "location":  [
		[ 68.05, 22.09, 30.7],  
		[ 63.55, 24.77, -31.5],  
		[ 60.33, 28.72, -41.8], 
		[ 58.48, 23.22, 49.4]
		]},
    { "nom": "dinanStmalo", 
      "couleur": "vert",
      "location":  [
		[ 72.17, 24.63, -60.1]
		]},
    { "nom": "paimpolStmalo", 
      "ferry": 2, 
      "location":  [
		[ 72.66, 12.21, 50.2],  
		[ 68.55, 8.97, 27.2],  
		[ 64.45, 6.85, 19.9],  
		[ 60.16, 6.57, 1.5],  
		[ 55.86, 7.42, -10.7],  
		[ 51.76, 9.11, -17.0]
		]},
    { "nom": "fougeresStmalo", 
      "couleur": "bleu",
      "location":  [
		[ 96.58, 25.73, 115.2],  
		[ 91.89, 26.29, -30.7],  
		[ 87.89, 26.01, 4.4],  
		[ 85.16, 22.06, 46.1],  
		[ 81.25, 19.38, 24.0],  
		[ 77.83, 17.12, 24.4]
		]},
    { "nom": "rennesStmaloR", 
        "couleur": "rouge",
      "location":  [
		[ 83.50, 35.57, 88.5],  
		[ 81.15, 29.79, 55.9],  
		[ 79.00, 25.13, 56.7],  
		[ 77.54, 19.77, 69.6]
		]},
    { "nom": "rennesStmaloJ", 
      "couleur": "jaune",
      "location":  [
		[ 82.13, 35.88, 88.5],  
		[ 79.69, 30.52, 55.5],  
		[ 77.64, 25.78, 58.0],  
		[ 76.17, 20.28, 68.7]
		]},
    { "nom": "belleilePontlabbe", 
      "ferry": 3, 
      "location":  [
		[ 38.87, 76.67, -18.0],  
		[ 34.57, 77.24, -2.9],  
		[ 30.66, 74.98, 24.0],  
		[ 27.15, 72.02, 29.9],  
		[ 24.02, 68.21, 39.8],  
		[ 21.97, 63.13, 60.8],  
		[ 20.31, 57.63, 68.2],  
		[ 20.12, 51.57, 90.0]
		]},
    { "nom": "belleileLorient", 
      "ferry": 1, 
      "location":  [
		[ 39.26, 71.28, 19.4],  
		[ 36.91, 66.91, 52.3],  
		[ 36.23, 61.41, 79.6],  
		[ 38.96, 57.60, 136.0]
		]},
    { "nom": "belleilePlouarnel", 
      "ferry": 1, 
      "location":  [
		[ 43.85, 72.55, -79.6]
		]},
    { "nom": "belleilePornic", 
      "ferry": 3, 
      "location":  [
		[ 65.92, 89.51, -45.0],  
		[ 62.30, 91.48, -19.4],  
		[ 58.40, 92.05, -4.4],  
		[ 54.59, 90.92, 10.4],  
		[ 50.78, 88.94, 19.4],  
		[ 47.56, 85.84, 32.5],  
		[ 45.31, 81.18, 55.5],  
		[ 44.73, 75.68, 82.7]
		]},
    { "nom": "loudeacPontivy", 
      "couleur": "jaune",
      "location":  [
		[ 52.15, 41.82, 0.0],  
		[ 56.35, 43.09, -102.9]
		]},
    { "nom": "locminePontivy", 
      "location":  [
		[ 52.05, 43.94, 63.4] ]},
    { "nom": "locmineLorient", 
      "couleur": "blanc",
      "location":  [
        [39.84, 53.31, -51.1], 
        [43.16, 47.39, 37.5], 
        [45.70, 52.19, -53.4], 
        [49.22, 46.54, 32.0] 
        ]},
    { "nom": "aurayLorientJ", 
      "couleur": "jaune",
      "location":  [
        [45.70, 54.87, 33.3], 
        [41.02, 54.58, -1.5] 
        ]},
    { "nom": "aurayLorientV", 
      "couleur": "vert",
      "location":  [
        [45.12, 56.84, 29.9], 
        [40.82, 56.56, 1.6],
        ]},
    { "nom": "aurayLocmineR", 
      "couleur": "rose",
      "location":  [
        [49.41, 55.99, -56.7] 
        ]},
    { "nom": "aurayLocmineO", 
      "couleur": "orange",
      "location":  [
        [50.49, 56.98, -58.0]
        ]},
    { "nom": "aurayVannes1", 
      "location":  [
        [51.46, 58.25, 16.6] 
        ]},
    { "nom": "aurayVannes2", 
      "location":  [
        [51.17, 60.37, 12.5] 
        ]},
    { "nom": "aurayPlouarnel", 
      "couleur": "rouge",
      "location":  [
        [45.90, 64.32, -46.1]
        ]},
    { "nom": "plouarnelVannes", 
      "ferry": 1, 
      "location":  [
        [54.20, 67.84, -74.1], 
        [50.20, 68.55, -3.0], 
        [46.58, 66.15, 26.6]
        ]},
    { "nom": "redonVannesR", 
      "couleur": "rose",
      "location":  [
        [66.41, 57.69, 19.9], 
        [61.91, 57.26, 3.0], 
        [57.42, 58.82, -14.0]
        ]},
    { "nom": "redonVannesO", 
      "couleur": "orange",
      "location":  [
        [66.02, 59.52, 19.9], 
        [61.82, 59.10, 1.5], 
        [57.81, 60.65, -14.0]
        ]},
    { "nom": "stnazaireVannes", 
      "couleur": "vert",
      "location":  [
        [61.91, 77.01, 3.0], 
        [63.77, 72.50, 122.8], 
        [65.92, 67.42, 119.9], 
        [61.04, 65.02, 0.0], 
        [57.62, 62.34, 29.2]
        ]},
    { "nom": "locminePloermelN", 
      "couleur": "noir",
      "location":  [
        [59.28, 48.94, 0.0], 
        [55.18, 48.94, 0.0]
        ]},
    { "nom": "locminePloermelB", 
      "couleur": "bleu",
      "location":  [
        [59.28, 50.78, 1.5], 
        [55.18, 50.78, 0.0]
        ]},
    { "nom": "loudeacPloermel", 
      "couleur": "rouge",
      "location":  [
        [67.48, 45.13, 118.0], 
        [64.84, 39.35, 47.2], 
        [61.04, 36.67, 24.4], 
        [56.84, 35.83, 6.3]
        ]},
    { "nom": "monfortsurmeuPloermel", 
      "couleur": "vert",
      "location":  [
        [72.46, 46.26, -60.6], 
        [69.63, 50.35, -41.6], 
        [65.72, 50.63, -1.5]
        ]},
    { "nom": "loudeacMontfortsurmeu", 
      "couleur": "blanc",
      "location":  [
        [70.80, 37.38, 22.4], 
        [68.95, 32.58, 60.6], 
        [64.45, 30.89, 9.5], 
        [60.16, 31.73, -9.2], 
        [56.35, 33.99, -20.4]
        ]},
    { "nom": "dinanMontfortsurmeu", 
      "couleur": "rose",
      "location":  [
        [73.05, 27.64, 68.7], 
        [74.51, 33.43, 74.9]
        ]},
    { "nom": "monfortsurmeuRennes1", 
      "location":  [
        [77.15, 39.63, 11.0]
        ]},
    { "nom": "monfortsurmeuRennes2", 
      "location":  [
        [76.95, 41.18, 14.0]
        ]},
    { "nom": "fougeresRennes", 
      "couleur": "blanc",
      "location":  [
        [88.77, 32.86, -13.7], 
        [87.30, 39.77, -80.8], 
        [83.59, 41.47, -15.5]
        ]},
    { "nom": "baindebretagneRennesO", 
      "couleur": "orange",
      "location":  [
        [80.86, 49.22, -91.5], 
        [80.86, 55.01, -90.0]
        ]},
    { "nom": "baindebretagneRennesN", 
      "couleur": "noir",
      "location":  [
        [82.23, 49.08, -90.0], 
        [82.23, 54.87, -90.0]
        ]},
    { "nom": "monfortsurmeuRedon", 
      "couleur": "bleu",
      "location":  [
        [70.51, 59.94, -88.5], 
        [71.88, 54.58, -10.7], 
        [75.68, 53.31, -82.1], 
        [76.17, 47.81, -103.2]
        ]},
    { "nom": "nantesPornic", 
      "couleur": "blanc",
      "location":  [
        [79.30, 88.72, -57.5], 
        [75.10, 88.29, 4.4], 
        [71.58, 85.19, 34.1]
        ]},
    { "nom": "nantesStnazaire", 
      "couleur": "orange",
      "location":  [
        [77.15, 81.52, 1.5], 
        [73.44, 78.42, 32.0], 
        [68.75, 77.57, 2.9]
        ]},
    { "nom": "baindebretagneNantesR", 
      "couleur": "rose",
      "location":  [
        [81.84, 63.89, -101.3], 
        [81.84, 69.53, -90.0], 
        [80.96, 75.04, -76.0], 
        [81.25, 81.10, -96.3]
        ]},
    { "nom": "baindebretagneNantesB", 
      "couleur": "bleu",
      "location":  [
        [83.11, 63.61, -101.3], 
        [83.20, 69.39, -90.0], 
        [82.32, 74.89, -77.1], 
        [82.62, 80.96, -94.8]
        ]},
    { "nom": "nantesStmarsdudesert", 
      "couleur": "rouge",
      "location":  [
        [87.30, 78.98, -71.1], 
        [83.98, 81.38, -25.9]
        ]},
    { "nom": "clissonNantes", 
      "location":  [
        [85.74, 88.43, -14.0], 
        [83.69, 83.78, 58.0]
        ]},
    { "nom": "baindebretagneRedonB", 
      "couleur": "blanc",
      "location":  [
        [76.56, 57.26, -15.5], 
        [72.56, 59.10, -15.5]
        ]},
    { "nom": "baindebretagneRedonV", 
      "couleur": "vert",
      "location":  [
        [76.95, 59.24, -17.0], 
        [72.95, 60.93, -18.4]
        ]},
    { "nom": "redonStnazaire", 
      "couleur": "jaune",
      "location":  [
        [72.75, 68.55, -112.4], 
        [69.92, 72.21, -40.8], 
        [67.09, 76.45, -46.0]
        ]},
    { "nom": "pornicStnazaire", 
      "location":  [
        [67.87, 78.84, 57.5]
        ]},
    { "nom": "clissonPornic", 
      "couleur": "jaune",
      "location":  [
        [87.70, 93.65, -62.1], 
        [84.28, 96.19, -26.6], 
        [80.27, 96.47, -1.5], 
        [76.17, 95.49, 10.7], 
        [72.85, 91.82, 40.6], 
        [70.80, 86.60, 60.8]
        ]},
    { "nom": "ancenisClisson", 
      "couleur": "noir",
      "location":  [
        [93.75, 80.82, -75.6], 
        [91.02, 85.05, -43.9]
        ]},
    { "nom": "ancenisChateaubriant", 
      "couleur": "vert",
      "location":  [
        [95.51, 72.36, -72.6], 
        [92.87, 64.74, 25.9], 
        [89.75, 61.50, 35.4]
        ]},
    { "nom": "fougeresVitre", 
      "location":  [
        [92.87, 39.35, -85.4]
        ]},
    { "nom": "chateaubriantVitre", 
      "couleur": "rose",
      "location":  [
        [92.29, 47.95, -82.3], 
        [88.57, 51.34, -31.4], 
        [87.89, 57.97, -90.0]
        ]},
    { "nom": "baindebretagneChateaubriant", 
      "location":  [
        [84.18, 56.70, 27.9]
        ]},
    { "nom": "chateaubriantStmarsdudesert", 
      "location":  [
        [85.16, 66.43, -60.1], 
        [88.38, 71.79, -127.5]
        ]},
    { "nom": "ancenisStmarsdudesert", 
      "location":  [
        [90.82, 72.07, 11.9]
        ]},
    { "nom": "chateaubriantFougeres", 
      "couleur": "orange",
      "location":  [
        [96.78, 37.66, -130.6], 
        [97.66, 42.88, -104.8], 
        [97.66, 48.66, -88.5], 
        [96.09, 53.88, -64.8], 
        [93.36, 57.97, -45.0], 
        [89.55, 59.52, -14.0]
        ]} ]
};

exports.byName = function(nom){
  return maps[nom];
}
