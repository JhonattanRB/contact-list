/*Array of objects//Contact List = [{},{}];*/

const contacts = [
  {
    name: "Jhonattan",
    lastname: "Barrero",
    phone: "+57 3006723833",
    email: "jhonattan.jr@gmail.com",
    location: ["Sabaneta", "Carrera 38 #54-32"],
  },
  {
    name: "Juan",
    lastname: "Sanabria",
    phone: "+1 5555678",
    email: "juan.sanb@gmail.com",
    location: ["Bogotá", "Calle 122 #24-02"],
  },
  {
    name: "Mariana",
    lastname: "Palacio",
    phone: "+34 655901233",
    email: "mari.palacio@gmail.com",
    location: ["Medellin", "Carrera 43 #14-25"],
  },
  {
    name: "Maria",
    lastname: "Grisales",
    phone: "+57 3005901233",
    email: "maria_grisales@gmail.com",
    location: ["Medellín", "Carrera 33 #44-52"],
  },
  {
    name: "Julian",
    lastname: "Moreno",
    phone: "+1 5545774",
    email: "juli.moreno@gmail.com",
    location: ["Barranquilla", "Carrera 28 #14-22"],
  },
];

//Function to display Contact List

function displayContactList() {
  console.log("\nContact List:");

  for (const contact of contacts) {
    console.log("-------------");
    console.log(`Name: ${contact.name}`);
    console.log(`Last Name: ${contact.lastname}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
    console.log(`City: ${contact.location[0]}`);
    console.log(`Address: ${contact.location[1]}`);
  }
}

displayContactList();

//Show contact list as a JSON file

/*contactsJSON = JSON.stringify(contacts);
console.log(contactsJSON);
*/

//function to add a contact

function addContact(name, lastname, phone, email, city, address) {
  const newContact = {
    name: name,
    lastname: lastname,
    phone: phone,
    email: email,
    location: [city, address],
  };
  contacts.push(newContact); //array method push
  console.log("\nNew contact added\n");
  displayContactList();
}

//Example add

addContact(
  "Clara",
  "Palacio",
  "+1 48729292",
  "clara12333@gmail.com",
  "Sabaneta",
  "Carrera 35 #78-95"
);
addContact(
  "Jhonattan",
  "Rodriguez",
  "+57 3006723833",
  "jhonattan.jrodriguez@gmail.com",
  "Sabaneta",
  "Carrera 75Bsur-115"
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
