import DS from 'ember-data';

export default DS.Model.extend({
  studentName: DS.attr(),
  location: DS.attr(),
  content: DS.attr()
});
