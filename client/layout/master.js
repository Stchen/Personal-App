Template.master.onCreated(function(){
  this.dict = new ReactiveDict();
  this.dict.set("page", this.data)
})

Template.master.helpers({
  masterDict:function(){
    return Template.instance().dict
  }

  isLibrary:function(){
  return dict.get("page")
  }
})
