Template.Post.helpers({
	usernameDoAutor: function() {
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		//console.log(autor.usarname)
		return autor.username;
	}
});

Template.Post.events({
	"click .like-button": function(evento, template) {
		console.log("Botão foi clicado");
		//console.log(template.data._id);

		Meteor.call("curtirPost", template.data._id);
	}
});