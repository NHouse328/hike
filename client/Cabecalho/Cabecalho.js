Template.Cabecalho.events({
	"click .perfil": function() {

		FlowRouter.go("/perfil/" + Meteor.userId());
		
	}
});