Meteor.publish('written', function(){
  return written.find();
})

Meteor.publish('story', function(){
  return Story.find();
})

Meteor.publish('library', function(){
  return Library.find();
})
