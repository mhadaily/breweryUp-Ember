import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiUrl,
  namespace: 'v2',
  ajax: function(url, type, hash) {
    if (Ember.isEmpty(hash)) hash = {};
    if (Ember.isEmpty(hash.data)) hash.data = {};
    hash.data.key = config.apiKey;
    return this._super(url, type, hash);
  }
});
