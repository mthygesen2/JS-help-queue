import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        studentName1: this.get('studentName1'),
        studentName2: this.get('studentName2'),
        location: this.get('location'),
        content: this.get('content'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
