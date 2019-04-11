Template.Cabecalho.events({
	"click .perfil": function() {
		 FlowRouter.go("/perfil/" + this.idDoAutor);
		 console.log(this.idDoAutor)
	}
});