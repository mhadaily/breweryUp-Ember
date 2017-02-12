import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  name: DS.attr(),
  createDate: DS.attr(),
  mailingListUrl: DS.attr(),
  updateDate: DS.attr(),
  images: DS.attr(),
  established: DS.attr(),
  isOrganic: DS.attr(),
  website: DS.attr(),
  status: DS.attr(),
  statusDisplay: DS.attr()
});
