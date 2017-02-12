import DS from 'ember-data';

export default DS.Model.extend({
  updateDate: DS.attr(),
  description: DS.attr(),
  createDate: DS.attr(),
  name: DS.attr()
});
