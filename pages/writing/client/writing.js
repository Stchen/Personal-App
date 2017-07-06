Template.writing.onCreated(function(){
  Meteor.subscribe("library");
})

Template.pickNovel.helpers({
  liblist() {
    return Library.find()
  },
})
Template.writing.events({
  'click button'(elt,instance) {
    const storyname = instance.$('#storyname').val();
    const chapter = instance.$('#chapternumber').val();
    const chapternumber = parseInt(chapter);
    const content = instance.$('#content').val();//this holds the actually writing
    const parent = instance.$('#parent').val(); //shows us the book which the chapter is from
    var dates = new Date();
    var date = dates.toLocaleDateString(); //this generates the date format i actually wants
    console.log('adding ' + storyname);
    instance.$('#storyname').val("");
    instance.$('#chapternumber').val("");
    instance.$('#content').val("");
    instance.$('#parent').val("");
    //this empties the text boxes after you enter something
    var writen = {storyname:storyname, chapter:chapter,owner:Meteor.userId(),story:true, content:content, parent:parent, date:date};
    Meteor.call('writen.insert',writen);
    //Story.insert(write);
    console.dir(this);
    Router.go('/write');
  },

})
