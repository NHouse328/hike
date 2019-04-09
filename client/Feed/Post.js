Template.Post.helpers({

	usernameDoAutor: function() {
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		//console.log(autor.usarname);
		return autor.username;
	},

	numeroDeCurtidas: function() {
		//console.log(this.curtidas);
		return this.curtidas.length;
	},
		/* Fora da Aula*/
/*	
	numeroDeDescurtidas: function() {
		return this.descurtidas.length;	
	},
*/
	usuarioCurtiu: function() {
		var curtidas = this.curtidas;
		console.log(curtidas);

		var posicao = curtidas.indexOf(Meteor.userId());
		console.log(posicao);

		if (posicao === -1) {
			return false;
		} else {
			return true;
		}
	}
});

Template.Post.events({

	"click .botao-curtir": function(evento, template) {
		//console.log("Curtindo");
		//console.log(template.data._id);

		Meteor.call("curtirPost", template.data._id);
	},

	"click .botao-descurtir": function(evento, template) {
		//console.log("Descurtindo");

		Meteor.call("descurtirPost", template.data._id);
	}

});