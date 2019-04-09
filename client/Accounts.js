AccountsTemplates.configure({
    defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
    defaultLayout: 'LayoutPrincipal',
    defaultLayoutRegions: {
        nav: 'Cabecalho'
    },
    defaultContentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn');