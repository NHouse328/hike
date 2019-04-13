Template.Cabecalho.onCreated(function() {
	Meteor.subscribe("usuarios");
	
});

Template.Cabecalho.helpers({
	perfil: function() {
		var idDoUsuario = Meteor.userId;

		var info = Meteor.users.findOne({_id: idDoUsuario});

		return info;
	}
});

Template.Cabecalho.events({
	"click .perfil": function() {

		FlowRouter.go("/perfil/" + Meteor.userId());
		
	}
});