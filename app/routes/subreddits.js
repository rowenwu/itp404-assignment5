import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({

  model(params) {   
    // console.log(params.subreddit_name);
    // console.log($.getJSON(`https://www.reddit.com/r/${params.subreddit_name}.json`));
    let posts = $.getJSON(`https://www.reddit.com/r/${params.subreddit_name}.json`)
        .then(function (results) {
            return results.data.children;
        })
    return posts;
  }
});
