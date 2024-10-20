import { LightningElement, wire } from 'lwc';
import isGuest from '@salesforce/user/isGuest';
import { subscribe, MessageContext } from 'lightning/messageService';
import NAVIGATION_MESSAGE_CHANNEL from '@salesforce/messageChannel/NavigationMessageChannel__c';


export default class Body extends LightningElement {
    page = 'home';

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            NAVIGATION_MESSAGE_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message) {
        this.page = message.page;
        console.log('Page value received:', this.page);
    }

    get isHomePage() {
        return this.page === 'home';
    }

    get isResumePage() {
        return this.page === 'resume';
    }

    get isS2TPage() {
        return this.page === 's2t';
    }

    get message() {
        return isGuest ? 'NOT LOGGED IN' : 'LOGGED IN';
    }
}