import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({
  //model(params){
  //  let url = `${config.apiUrl}/v2/beers/${params.beer_id}/breweries`;
  //  return Ember.RSVP.hash({
  //    beer: this.store.peekRecord('beer', params.beer_id),
  //    breweries: new Ember.RSVP.Promise((resolve, reject) => {
  //      Ember.$.ajax(url)
  //        .then(response => {
  //          this.store.pushPayload(response.data);
  //          resolve(response.data[0]);
  //        })
  //        .catch(e => reject(e));
  //    })
  //  });
  //}
});
