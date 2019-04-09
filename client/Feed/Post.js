Template.Post.helpers({
	usarnameDoAutor: function() {
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.usarname;
	}
});