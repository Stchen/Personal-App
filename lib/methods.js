Meteor.methods({
  'writen.insert'( writen ) {
  Story.insert(writen);
  },

  'writen.remove'(writen){
    Story.remove(writen);
  },

  'change.update'(change, story){
    console.dir('from'+change.changedname);
    console.dir(story);
    Story.update(story, {
        $set: {storyname: change.changedname, chapter: change.changedchapter },
    });
  },

  'library.insert'(input) {
    Library.insert(input);
  },

  'library.remove'(input){
    Library.remove(input);
  },


});
