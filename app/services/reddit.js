import Ember from 'ember';

export default Ember.Service.extend({
    findAllForSubreddit(subreddit) {
        let posts = $.getJSON(`https://www.reddit.com/r/${subreddit}.json`)
        .then(function (results) {
            console.log(results.data.children);
            return results.data.children;
        })
        return posts;
    }
});
