import Ember from 'ember';
import AutosubscribeMixin from 'ember-query-params/mixins/autosubscribe';

export default Ember.Route.extend(AutosubscribeMixin, {
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params){
    return this.store.query('beer', params);
  },
  actions: {
    queryChanged() {
      this.refresh();
    }

  }
});
