import Ember from 'ember';
import moment from 'moment';


export function relativeTime(params/*, hash*/) {  
  return moment(params[0] * 1000).calendar();
}
export default Ember.Helper.helper(relativeTime);
