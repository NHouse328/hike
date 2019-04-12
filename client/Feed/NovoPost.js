Template.NovoPost.onCreate(function() {
	this.urlDaImagem = new ReactiveVar();
});

Template.NovoPost.events({
  "submit form": function(evento, template) {
    evento.preventDefault();
    var texto = evento.target.texto.value;
    var urlDaImagem = template.urlDaImagem.get();
    
    Meteor.call("inserirPost", texto, urlDaImagem);
    
    evento.target.texto.value = "";
    
  },

  	"change .myFileInput": function(event, template) {
	    FS.Utility.eachFile(event, function(file) {
	        Images.insert(file, function (err, fileObj) {
	          	if (err){
	            	// handle error
	          	} else {

	            template.urlDaImagem.set("/cfs/files/images/" + fileObj._id);

	        	}
	    	});
    	});
	}
});