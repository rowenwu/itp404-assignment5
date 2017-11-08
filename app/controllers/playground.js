import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        markAsRead(title){
            let emails = this.get('model');
            let emailToMark = emails.find((email) => {
                return email.title === title;
            })
            console.log(emailToMark.read);
            
            Ember.set(emailToMark, 'read', true);
        }
    }
});