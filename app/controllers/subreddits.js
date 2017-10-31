import Ember from 'ember';

export default Ember.Controller.extend({
    sortedPosts: Ember.computed('model', function() {
        let posts = this.get('model');

        let sortedPosts = posts.sort(function(postA, postB) {
            if (postA.data.score < postB.data.score) {
              return 1;
            }
            if (postA.data.score > postB.data.score) {
              return -1;
            }
            return 0;
          });
      
          return sortedPosts;
    })
        
});
