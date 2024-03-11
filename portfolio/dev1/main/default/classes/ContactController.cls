public without sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        // Define the fields you want to access
        List<String> fieldsToAccess = new List<String>{'Id', 'FirstName', 'LastName', 'Email', 'Birthdate'};

        // Build the SOQL query
        String soqlQuery = 'SELECT ' + String.join(fieldsToAccess, ',') + ' FROM Contact LIMIT 100';

        // Execute the SOQL query
        List<Contact> contacts = Database.query(soqlQuery);

        // Use Security.stripInaccessible to enforce field-level security
        // This method returns a new SObjectAccessDecision that only includes accessible fields
        SObjectAccessDecision decision = Security.stripInaccessible(AccessType.READABLE, contacts);

        // Get the records that only include accessible fields
        List<Contact> accessibleContacts = (List<Contact>) decision.getRecords();

        return accessibleContacts;
    }
}