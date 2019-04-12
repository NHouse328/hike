Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(texto) {
    	if(Meteor.userId() !== null && texto) {
    		Posts.insert({
      		texto: texto,
     		idDoAutor: Meteor.userId(),
     		curtidas: [],
     		/* Fora da Aula*/
     		//descurtidas: []  
    		});
    	}
	},

	"curtirPost": function(idDoPost) {
		Posts.update(idDoPost, {
			$addToSet: {
				curtidas: Meteor.userId()
			}
		});
	},
	
	"descurtirPost": function (idDoPost) {
		Posts.update(idDoPost, {
			$pull: {
				curtidas: Meteor.userId()
			}
		});
	}
});







			/* Fora da Aula*/
/*
		if (usuarioCurtiu === true) {
			Posts.update(idDoPost, {
				$addToSet: {
					curtidas: Meteor.userId()
				}
			});
		} else {
			Posts.update(idDoPost, {
				$pull: {
					curtidas: Meteor.userId()
				}
			});
		}
	},
*/


				
			