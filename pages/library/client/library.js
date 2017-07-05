Template.write.onCreated(function(){
  Meteor.subscribe("story");
})

Template.showstory.helpers({
  liblist() {
    return Story.find({novel:true}).fetch();
  },
  owner(){return (Meteor.userId()== this.story.owner)},
})

Template.library.events({
  'click .newNovel'(elt,instance) {
    const novelName = instance.$('#novelName').val();
    console.log('adding ' + novelName);
    instance.$('#novelName').val("");
    //this empties the text boxes after you enter something
    var input = {novelName:novelName,novel:true,owner:Meteor.userId()};
    Meteor.call('writen.insert',input);
    //inserts a new novel in the library
    console.dir(this);
  }
})

Template.showstory.events({
  'click .remove'(elt,instance){
    if(Meteor.userId() == this.story.owner){
      //only allows delete if person owns the novel
      Meteor.call('writen.remove',this.story);
    }
  }
})
