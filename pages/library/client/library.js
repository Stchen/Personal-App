Template.library.onCreated(function(){
  Meteor.subscribe("library");
})

Template.library.helpers({
  liblist() {
    return Library.find()
  },
})

Template.showNovel.helpers({

  owner(){return (Meteor.userId()== this.library.owner)},
})

Template.library.events({
  'click .newNovel'(elt,instance) {
    const novelName = instance.$('#novelName').val();
    console.log('adding ' + novelName);
    instance.$('#novelName').val("");
    //this empties the text boxes after you enter something
    var input = {novelName:novelName,owner:Meteor.userId()};
    Meteor.call('library.insert',input);
    //inserts a new novel in the library
    console.dir(this);
  }
})

Template.showNovel.events({
  'click .remove'(elt,instance){
    if(Meteor.userId() == this.library.owner){
      //only allows delete if person owns the novel
      Meteor.call('library.remove',this.library);
    }
  }
})
