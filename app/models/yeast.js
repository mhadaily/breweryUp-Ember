import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  yeastType: DS.attr(),
  attenuationMin: DS.attr(),
  attenuationMax: DS.attr(),
  fermentTempMin: DS.attr(),
  fermentTempMax: DS.attr(),
  alcoholToleranceMin: DS.attr(),
  alcoholToleranceMax: DS.attr(),
  productId: DS.attr(),
  supplier: DS.attr(),
  yeastFormat: DS.attr(),
  category: DS.attr(),
  categoryDisplay: DS.attr(),
  createDate: DS.attr(),
  updateDate: DS.attr(),
  beer: DS.belongsTo(),

});
