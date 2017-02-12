import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  srmMax: DS.attr(),
  ibuMax: DS.attr(),
  srmMin: DS.attr(),
  description: DS.attr(),
  fgMin: DS.attr(),
  ibuMin: DS.attr(),
  createDate: DS.attr(),
  fgMax: DS.attr(),
  abvMax: DS.attr(),
  ogMin: DS.attr(),
  abvMin: DS.attr(),
  name: DS.attr(),
  categoryId: DS.attr(),
  beer: DS.belongsTo(),

});
