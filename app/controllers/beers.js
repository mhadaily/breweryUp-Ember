import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'page',
  ],
  page: 1,
  total_pages: 60877,
  actions: {
    prev(){
      let page = this.get('page');
      let newPage = page - 1;
      if (newPage < 1) {
        alert('Page number must be greater or equal than 1');
        return;
      }
      this.set('page', newPage);

    },
    next(){
      let page = this.get('page');
      let newPage = page + 1;
      if (newPage > 60877) {
        alert('Page number must be less or equal than 60877');
        return
      }
      this.set('page', newPage);
    }
  }
});
