Meteor.publish('written', function(){
  return written.find();
})

Meteor.publish('story', function(){
  return Story.find();
})

Meteor.publish('novel', function(){
  return Novel.find();
})
