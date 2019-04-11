Template.Cabecalho.events({
	"click .perfil": function() {
		 FlowRouter.go("/perfil/" + currentUser);
		 console.log(currentUser)
	}
});