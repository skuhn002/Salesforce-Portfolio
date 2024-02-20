import { LightningElement } from 'lwc';
import isGuest from '@salesforce/user/isGuest';

export default class Body extends LightningElement {
    get message() {
        return isGuest ? 'You are not logged in.' : 'You are logged in.';
    }
}