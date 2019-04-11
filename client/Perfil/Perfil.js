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
	}
});