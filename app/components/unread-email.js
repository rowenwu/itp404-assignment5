import Ember from 'ember';

export default Ember.Component.extend({
    click() {
        let title = this.get('email.title');
        this.get('onclick')(title);              
    }
    
});
