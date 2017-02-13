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
      let newPage = parseInt(page - 1);
      if (newPage < 1) {
        alert('Page number must be greater or equal than 1');
        return;
      }
      this.set('page', newPage);
    },
    next(){
      let page = this.get('page');
      let newPage = parseInt(page + 1);
      this.set('page', newPage);
    },
    updateValue(value){
      this.set('page', value);
    }
  }
});
