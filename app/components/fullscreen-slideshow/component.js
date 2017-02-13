import Ember from 'ember';

export default Ember.Component.extend({
  images: null,

  didInsertElement(){
    Ember.$.backstretch(this.images.split(','), {duration: 3000, fade: 750});
    Ember.$('.top-menu').removeClass('bg');
  },

  //Better Ember performance if we destroy, always destroy all events while existing a component
  willDestroyElement(){
    Ember.$.backstretch("destroy");
    Ember.$('.top-menu').addClass('bg');
  }

});
