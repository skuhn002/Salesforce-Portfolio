public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, FirstName, LastName, Email, Birthdate FROM Contact WITH SECURITY_ENFORCED LIMIT 100];
    }
}