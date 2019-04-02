Template.Feed.events({
  "submit form": function(evento, template) {
    evento.preventDefault();
    var texto = evento.target.texto.value;
    console.log(texto);
    Posts.insert({
      texto: texto  
    });
    
    evento.target.texto.value = "";
    
  }
});

Template.Feed.helpers({
  posts: function() {
    var postsCollection = Posts.find().fetch();
    return postsCollection
  }
});