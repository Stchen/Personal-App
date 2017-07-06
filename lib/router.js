Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('write');
Router.route('library');
Router.route('read');
Router.route('userList');
Router.route('contact');
Router.route('chatroom', {name: 'chat'});
Router.route('about');

/*
Router.route('/:novelName',
{name:"write",
 data: function(){
	 const c = Story.findOne(this.params.novelName);
	 return c;
 }});
*/

Router.route('apidemo');

Router.route('graphics');

Router.route('firefly');

Router.route('sponsors');

Router.route('draw');

Router.route('writing');

/*
Router.route('/write', {
	action: function(){
		this.render("master");
	},
	data: function(){
		return "write"
	}
	})
});

Router.route('/library', {
	action: function(){
		this.render("master");
	},
	data:function(){
		return "library"
	}
});
*/
