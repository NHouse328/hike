Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(texto) {
    	if(Meteor.userId() !== null) {
    		Posts.insert({
      		texto: texto,
     		idDoAutor: Meteor.userId()  
    		});
    	}
	}
});