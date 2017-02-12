import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('beers');
  this.route('beer', {path: 'beers/:beer_id'});
  this.route('brewery', {path: 'beers/:beer_id/breweries'});
});

export default Router;
