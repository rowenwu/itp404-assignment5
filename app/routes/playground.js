import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let emails = [
            {
            read: false,
            title: 'Sign up for Spring classes!'
          },
          {
            read: true,
            title: 'Sign up for Fall classes!'
          }];
        return emails;
        // let email = {
        //     read: false,
        //     title: 'Sign up for Spring classes!'
        //   };
        // return email;
    }
});
