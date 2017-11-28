import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchForSubreddits() {
      this.transitionToRoute('subreddits', this.get('keywords'));
    }
  }
});
