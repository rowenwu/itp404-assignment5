import Ember from 'ember';

const eq = (params) => (params[0] === params[1]) || (params[0] === 'default');

export default Ember.Helper.helper(eq);
