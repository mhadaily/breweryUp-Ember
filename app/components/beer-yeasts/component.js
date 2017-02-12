import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Component.extend({
  beerId: null,
  content: null,

  didInsertElement(){
    let beerID = this.get('beerId');
    let url = `${config.apiUrl}/v2/beers/${beerID}/yeasts`;
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax(url)
        .then(response => {
          this.set('content', response.data[0]);
        })
        .catch(e => reject(e));
    });
  }

});
