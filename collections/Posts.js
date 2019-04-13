Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(texto, urlDaImagem) {
    	if(Meteor.userId() !== null && texto) {
    		Posts.insert({
      		texto: texto,
     		idDoAutor: Meteor.userId(),
     		curtidas: [],
     		imagem: urlDaImagem
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
	},

	"removerPost": function(idDoPost) {
		var post = Posts.findOne({_id, idDoPost});
		var autor = post.idDoAutor;

		if (autor === Meteor.userId()) {
			Posts.remove(idDoPost);
		}
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


				
			