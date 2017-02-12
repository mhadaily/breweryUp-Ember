import DS from 'ember-data';

export default DS.Model.extend({
  beer: DS.belongsTo(),
  name: DS.attr(),
  category: DS.attr(),
  categoryDisplay: DS.attr(),
  createDate: DS.attr()
});
