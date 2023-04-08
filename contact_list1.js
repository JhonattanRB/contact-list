/*Array of objects//Contact List = [{},{}];*/

const contacts = [
  {
    name: "Jhonattan Barrero",
    phone: "+57 3006723833",
    email: "jhonattan.jr@gmail.com",
  },
  { name: "Juan Sanabria", phone: "+1 5555678", email: "juan.sanb@gmail.com" },
  {
    name: "Mariana Palacio",
    phone: "+34 655901233",
    email: "mari.palacio@gmail.com",
  },
  {
    name: "Maria Grisales",
    phone: "+57 3005901233",
    email: "maria_grisales@gmail.com",
  },
  {
    name: "Julian Moreno",
    phone: "+1 5545774",
    email: "juli.moreno@gmail.com",
  },
];

//Function to display Contact List

function displayContactList() {
  console.log("\nContact List:");

  for (const contact of contacts) {
    console.log("-------------");
    console.log(`Name: ${contact.name}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
  }
}

//Show contact list as a JSON file

/*contactsJSON = JSON.stringify(contacts);
console.log(contactsJSON);
*/

//function to add a contact

function addContact(name, phone, email) {
  const newContact = { name: name, phone: phone, email: email };
  contacts.push(newContact); //array method push
  console.log("\nNew contact added\n");
  displayContactList();
}

//Example add

addContact("Clara Palacio", "+1 48729292", "clara12333@gmail.com");
addContact(
  "Jhonattan Rodriguez",
  "+57 3006723833",
  "jhonattan.jrodriguez@gmail.com"
);

//function to delete a contact by name or email

const deleteContact = (valueToDelete) => {
  const nameValidation = valueToDelete.indexOf("@"); //indexof to find "@" in string

  if (nameValidation !== -1) {
    //delete by email
    const indexToDelete = contacts.findIndex(
      (contact) => contact.email === valueToDelete
    );
    if (indexToDelete !== -1) {
      contacts.splice(indexToDelete, 1); // Removes 1 element at the specified index with splice
      console.log("\nContact deleted successfully.\n");
      //show new contact list
      displayContactList();
    } else {
      console.log("\nContact not found.\n");
    }
    //console.log("Found '@' at index:", nameValidation);
  } else {
    //delete by name
    const indexToDelete = contacts.findIndex(
      (contact) => contact.name === valueToDelete
    );
    if (indexToDelete !== -1) {
      contacts.splice(indexToDelete, 1); // Removes 1 element at the specified index
      console.log("\nContact deleted successfully.\n");
      //show new contact list
      displayContactList();
    } else {
      console.log("\nContact not found.\n");
    }
    //console.log("No '@' found in the string.");
  }
};

//Example delete

deleteContact("Juan P");
deleteContact("jhonattan.jr@gmail.com");

console.log("\n---That´s all-----\n");
