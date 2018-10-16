import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.mainTemplate.onCreated(function helloOnCreated() {

});

Template.mainTemplate.helpers({
  testing(){
    console.log("testing log");
  }
});

Template.mainTemplate.events({

});
