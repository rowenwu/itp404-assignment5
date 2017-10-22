import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchForSubreddits() {
      this.transitionToRoute('subreddits', {subreddit_name: this.get('keywords')});
    }
  }
});
