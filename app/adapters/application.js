import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiUrl,
  namespace: 'v2',

  /*
    Ajax will override ajax call and build a new one. In case, we want to send always a Param to URL so
     we can have this method to help us to send on every single ajax call in Ember.
     Since, I have written a Lambda Function and BreweryDB doesn't support browser call which make sense because
     of revealing KEY to public, I have disabled this, However, I will keep this as a reference
   */

  //ajax(url, type, hash) {
  //  if (Ember.isEmpty(hash)) hash = {};
  //  if (Ember.isEmpty(hash.data)) hash.data = {};
  //  hash.data.key = config.apiKey;
  //  return this._super(url, type, hash);
  //}
});
