Router.route('/', {
    name: 'home',
    template: 'home'
});


Router.route('/register');

Router.route('/login');

Router.configure({
    layoutTemplate: 'main'
});
Router.route('/main');

Router.route('/answer/:_id', {
    data: function(){
    }
});

