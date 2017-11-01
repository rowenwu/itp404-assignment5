import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        changeScore(newVoteValue){
            this.set('post.data.score', newVoteValue);
        }
    }
});
