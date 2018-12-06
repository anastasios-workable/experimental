export default {
  type: 'record',
  name: 'job',
  namespace: 'com.workable',
  fields: [
    {name: 'id', type: 'string'},
    {name: 'title', type: 'string'},
    {name: 'description', type: 'string'}
  ]
};
