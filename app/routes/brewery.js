import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params){
    let url = `${config.apiUrl}/v2/beers/${params.beer_id}/breweries`;
    return Ember.RSVP.hash({
      breweries: Ember.$.ajax(url)
        .then(response => response.data[0])
        .catch(e => console.error(e))
    });

  }
});
