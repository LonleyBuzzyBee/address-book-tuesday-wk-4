
// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}
// Performing addContact function on AddressBook. Contact is passed in as a parameter. //
AddressBook.prototype.addContact = function(contact) {
  // Creates a  { contact : id }. Assigns it to the result of running "this"(contact id), which returns the an increased id.
  contact.id = this.assignId();
  // { Contact : # } is pushed into contacts in AddressBook
  this.contacts.push(contact);
}

// Nested function in addContact //
AddressBook.prototype.assignId = function() {
  // Increase current id by 1
  this.currentId += 1;
  // Send increased id back to contactID in addContact
  return this.currentId;
}

// Search contact by id and return entire contact JSON //
AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     // <-- This line is new!
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

// Search contacts by id and delete the corresponding contact
AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     // <-- This line is new!
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function(){

});