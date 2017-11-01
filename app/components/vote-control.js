import Ember from 'ember';

export default Ember.Component.extend({
    upButtonClicked: false,
    downButtonClicked: false,
    actions: {
        toggleUpButton() {
            this.toggleProperty('upButtonClicked');
            this.set('downButtonClicked', false);
            let newVoteValue = this.get('score') + 1;
            this.get('onvote')(newVoteValue);              
        },
        toggleDownButton() {
            this.toggleProperty('downButtonClicked');
            this.set('upButtonClicked', false);
            let newVoteValue = this.get('score') - 1;
            this.get('onvote')(newVoteValue);              
        }
      }

});
