@isTest
public with sharing class TestContactController {
    @testSetup
    static void makeData(){
        Contact c = new Contact();
        c.FirstName = 'Test';
        c.LastName = 'McTester';
        c.Email = 'test1224@email.com';
        c.Birthdate = Date.newInstance(2024, 1, 25);

        insert c;
    }

    @isTest
    public static void pTest1(){
        List<Contact> cons = ContactController.getContacts();

        System.assertEquals(1, cons.size(), 'There should be 1 contact in the list');
    }
}