import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('beers');
  this.route('beer', {path: 'beers/:beer_id'}, () => {
    this.route('breweries', {path: 'beers/:beer_id/breweries'});
    this.route('events', {path: 'beers/:beer_id/events'});
    this.route('yeasts', {path: 'beers/:beer_id/yeasts'});
    this.route('ingredients', {path: 'beers/:beer_id/ingredients'});
  });

});

export default Router;
