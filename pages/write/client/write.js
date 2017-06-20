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
    Story.insert({storyname:storyname, chapter:chapter,owner:Meteor.userId()});
    console.dir(this);
  }
})

Template.removestory.events({
  'click span'(elt,instance){
    console.dir(this);
    //this find the mongoid so we can delete something
    console.log(this);
    //this used to only show the word Object
    if(this.story.owner == Meteor.userID()){
        Story.remove(this.story._id);
    }else{
      alert("You do not have permission to do this.");
    }
  }
})
