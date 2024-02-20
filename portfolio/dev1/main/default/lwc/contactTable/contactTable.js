// contactTable.js
import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactTable extends LightningElement {
    columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Birthdate', fieldName: 'Birthdate', type: 'date' }
    ];

    @wire(getContacts)
    contacts;
}