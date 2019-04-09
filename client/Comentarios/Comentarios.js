Template.Comentario.helpers({
	usarnameDoAutor: function(){
		var idDoAutor = this.autor;
		var autor = Meteor.users.findOne({_id: idDoAutor});

		return autor.username;
	}
});