import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import NAVIGATION_MESSAGE_CHANNEL from '@salesforce/messageChannel/NavigationMessageChannel__c';

export default class Header extends LightningElement {
    @wire(MessageContext)
    messageContext;

    page = 'home';

    navigate(page) {
        const payload = { page };
        publish(this.messageContext, NAVIGATION_MESSAGE_CHANNEL, payload);
    }

    navToHome() {
        this.page = 'home';
        this.navigate(this.page);
    }

   navToResume() {
        this.page = 'resume';
        this.navigate(this.page);
   }

   navToS2T() {
        this.page = 's2t';
        this.navigate(this.page);
   }
}