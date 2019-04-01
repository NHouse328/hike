FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Inicio"})     
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Sobre"})
    }
});

FlowRouter.route("/contatos", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Contatos"})
    }
});