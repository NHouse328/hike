Template.Perfil.helpers({
	perfil: function() {
		var idDoUsuario = FlowRouter.getParam("id");
		//console.log(idDoUsuario);

		var info = Meteor.users.findOne({_id: idDoUsuario});
		//console.log(info);

		return info;
	},

	posts: function() {
		var idDoUsuario = FlowRouter.getParam("id");
		var postsDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch();

		return postsDoPerfil;
	},

	segue: function() {

		var idDoUsuario = FlowRouter.getParam("id");
		var usuario = Meteor.users.findOne({_id: idDoUsuario});
		var seguidores = usuario.profile.seguidores;

		var posicao = seguidores.indexOf(Meteor.userId());
		//console.log(posicao);

		if (posicao === -1) {
			return false;
		} else {
			return true;
		}
	}
});

Template.Perfil.events({
	"click .seguir": function(evento, template) {
		//console.log("Seguindo");
		var idDoUsuario = FlowRouter.getParam("id");
		Meteor.call("seguirUsuario", idDoUsuario);
	},

	"click .deixar-de-seguir": function(evento, template) {
		//console.log("Deixando de seguindo");
		var idDoUsuario = FlowRouter.getParam("id");
		Meteor.call("deixarDeSeguirUsuario", idDoUsuario);
	}
});