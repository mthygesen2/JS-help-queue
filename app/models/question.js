import DS from 'ember-data';

export default DS.Model.extend({
  studentName1: DS.attr(),
  studentName2: DS.attr(),
  location: DS.attr(),
  content: DS.attr()
});
