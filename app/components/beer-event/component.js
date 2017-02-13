import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Component.extend({
  beerId: null,
  content: null,

  didInsertElement(){
    let beerID = this.get('beerId');
    let url = `${config.apiUrl}/v2/beers/${beerID}/events`;
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax(url)
        .then(response => {
          if (response.data) {
            this.set('content', response.data[0]);
          } else {
            this.set('content', {noData: 'THERE IS NO DATA AVAILABLE'});
          }
        })
        .catch(e => reject(e));
    });
  }

});
