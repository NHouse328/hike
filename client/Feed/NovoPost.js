Template.NovoPost.events({
  "submit form": function(evento, template) {
    evento.preventDefault();
    var texto = evento.target.texto.value;

    //console.log(texto);
    //console.log(Meteor.user.Id());
    
    Meteor.call("inserirPost", texto);
    
    evento.target.texto.value = "";
    
  }
});