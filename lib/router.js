Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('write');
Router.route('read');
Router.route('userList');
Router.route('contact');
Router.route('chatroom', {name: 'chat'});
Router.route('about');
Router.route('pokemon');

Router.route('pokemonData/:ename',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params.ename);
	 return c;
 }});

Router.route('apidemo');

Router.route('firefly');

Router.route('sponsors')

Router.route('draw')

Router.route('graphics')
