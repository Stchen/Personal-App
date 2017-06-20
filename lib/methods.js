Meteor.methods({
  'writen.insert'( writen ) {
  Story.insert(writen);
  },

  'writen.remove'(writen){
    Story.remove(writen);
  },
});
