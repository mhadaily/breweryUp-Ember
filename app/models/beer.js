import DS from 'ember-data';

export default DS.Model.extend({
  style: DS.attr(),
  glass: DS.attr(),
  labels: DS.attr(),
  available: DS.attr(),
  status: DS.attr(),
  srmId: DS.attr(),
  beerVariationId: DS.attr(),
  statusDisplay: DS.attr(),
  foodPairings: DS.attr(),
  srm: DS.attr(),
  updateDate: DS.attr(),
  servingTemperature: DS.attr(),
  availableId: DS.attr(),
  beerVariation: DS.attr(),
  abv: DS.attr(),
  year: DS.attr(),
  name: DS.attr(),
  originalGravity: DS.attr(),
  styleId: DS.attr(),
  ibu: DS.attr(),
  glasswareId: DS.attr(),
  isOrganic: DS.attr(),
  createDate: DS.attr(),
  description: DS.attr()
//breweries: DS.hasMany(),
//events: DS.hasMany(),
//ingredients: DS.hasMany(),
//yeasts: DS.hasMany()
});
