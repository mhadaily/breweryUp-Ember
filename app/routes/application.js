import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  queryParams: {
    key: config.apiKey
  },
});
