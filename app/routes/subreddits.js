import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  reddit: Ember.inject.service(),
  model: function (params) {   
      return this.get('reddit').findAllForSubreddit(params.subreddit_name);
    }
});
