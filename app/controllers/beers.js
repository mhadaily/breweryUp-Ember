import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'page',
  ],
  isLoading: false,
  page: 1,
  total_pages: 60877,
  actions: {
    prev(){
      this.set('isLoading', true);
      let page = this.get('page');
      let newPage = parseInt(page - 1);
      if (newPage < 1) {
        alert('Page number must be greater or equal than 1');
        return;
      }
      this.set('page', newPage);
      setTimeout(() => {
        this.set('isLoading', false);
      }, 2000);
    },
    next(){
      this.set('isLoading', true);
      let page = this.get('page');
      let newPage = parseInt(Number(page) + 1);
      this.set('page', newPage);
      setTimeout(() => {
        this.set('isLoading', false);
      }, 2000);
    },
    updateValue(value){
      this.set('isLoading', true);
      this.set('page', value);
      setTimeout(() => {
        this.set('isLoading', false);
      }, 2000);
    }
  }
});
