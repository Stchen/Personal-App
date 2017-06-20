Template.showstory.helpers({
  storylist() {return Story.find()},
})

Template.addstory.events({
  'click button'(elt,instance) {
    const storyname = instance.$('#storyname').val();
    const chapter = instance.$('#chapternumber').val();
    const chapternumber = parseInt(chapter);
    console.log('adding ' + storyname);
    instance.$('#storyname').val("");
    instance.$('#chapternumber').val("");
    //this empties the text boxes after you enter something
    var writen = {storyname:storyname, chapter:chapter,owner:Meteor.userId()};
    Meteor.call('writen.insert',writen);
    //Story.insert(write);
    console.dir(this);
  }
})

Template.removestory.helpers({
  owner() {return (Meteor.userId() == this.story.owner)}
})

Template.removestory.events({
  'click span'(elt,instance){
    console.dir(this);
    //this find the mongoid so we can delete something
    //this used to only show the word Object
    if(Meteor.userId() == this.story.owner){
      Meteor.call('writen.remove',this.story);
    }
    /*
    if(this.story.owner == Meteor.userId()){
        Story.remove(this.story._id);
    }else{
      alert("You do not have permission to do this.");
    }
    */
  }
})
