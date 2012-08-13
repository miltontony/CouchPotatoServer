Page.Recent = new Class({

    Extends: PageBase,

    name: 'recent',
    title: 'Recently downloaded movies.',

    indexAction: function(param){
        var self = this;

        if(!self.list){
            self.list = new MovieList({
                'identifier': 'manage',
                'status': 'done',
                'actions': MovieActions,
                'menu': [self.refresh_button, self.refresh_quick]
            });
            $(self.list).inject(self.el);
        }

    },

})
