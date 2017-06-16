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
    People.insert({storyname, chapter})
  }
})
