const prompt = require("prompt-sync")();

/*Array of objects//Contact List = [{},{}];*/

const contacts = [
  {
    id: "1",
    name: "Jhonattan",
    lastname: "Barrero",
    phone: "+57 3006723833",
    email: "jhonattan.jr@gmail.com",
    location: ["Sabaneta", "Carrera 38 #54-32"],
  },
  {
    id: "2",
    name: "Juan",
    lastname: "Sanabria",
    phone: "+1 5555678",
    email: "juan.sanb@gmail.com",
    location: ["Bogotá", "Calle 122 #24-02"],
  },
  {
    id: "3",
    name: "Mariana",
    lastname: "Palacio",
    phone: "+34 655901233",
    email: "mari.palacio@gmail.com",
    location: ["Medellin", "Carrera 43 #14-25"],
  },
  {
    id: "4",
    name: "Maria",
    lastname: "Grisales",
    phone: "+57 3005901233",
    email: "maria_grisales@gmail.com",
    location: ["Medellín", "Carrera 33 #44-52"],
  },
  {
    id: "5",
    name: "Julian",
    lastname: "Moreno",
    phone: "+1 5545774",
    email: "juli.moreno@gmail.com",
    location: ["Barranquilla", "Carrera 28 #14-22"],
  },
];

//1. Function to display Contact List

function displayContactList() {
  console.log("\nContact List:");

  for (const contact of contacts) {
    console.log("-------------");
    console.log(`Id: ${contact.id}`);
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

//2. Function to Add a Contact in List

function addContact(id, name, lastname, phone, email, city, address) {
  const newContact = {
    id: id,
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

//3. Function to delete a Contact in List

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
    //delete by id
    const indexToDelete = contacts.findIndex(
      (contact) => contact.id === valueToDelete
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

//BONUS

//function to edit a contact

const editContact = (valueToEdit) => {
  const nameValidation = valueToEdit.indexOf("@"); //indexof to find "@" in string
  if (nameValidation !== -1) {
    //edit by email
    const indexToEdit = contacts.findIndex(
      (contact) => contact.email === valueToEdit
    );
    if (indexToEdit !== -1) {
      console.log("-------------");
      console.log(
        "Contact to edit is: ",
        contacts[indexToEdit].name,
        contacts[indexToEdit].lastname
      );
      console.log("-------------");
      contacts[indexToEdit].id = prompt("Enter the user´s id: ");
      contacts[indexToEdit].name = prompt("Enter the user´s name: ");
      contacts[indexToEdit].lastname = prompt("Enter the user´s last name: ");
      contacts[indexToEdit].phone = prompt("Enter the user´s phone: ");
      contacts[indexToEdit].location[0] = prompt(
        "Enter the user's city of residence: "
      );
      contacts[indexToEdit].location[1] = prompt("Enter user´s address: ");
      console.log("\nContact edited successfully.\n");
      //show new contact list
      displayContactList();
    } else {
      console.log("\nContact not found.\n");
    }
    //console.log("Found '@' at index:", nameValidation);
  } else {
    //delete by id
    const indexToEdit = contacts.findIndex(
      (contact) => contact.id === valueToEdit
    );
    if (indexToEdit !== -1) {
      console.log("-------------");
      console.log(
        "Contact to edit is: ",
        contacts[indexToEdit].name,
        contacts[indexToEdit].lastname
      );
      console.log("-------------");
      contacts[indexToEdit].name = prompt("Enter the user´s name: ");
      contacts[indexToEdit].lastname = prompt("Enter the user´s last name: ");
      contacts[indexToEdit].phone = prompt("Enter the user´s phone: ");
      contacts[indexToEdit].email = prompt("Enter the user´s email: ");
      contacts[indexToEdit].location[0] = prompt(
        "Enter the user's city of residence: "
      );
      contacts[indexToEdit].location[1] = prompt("Enter user´s address: ");
      console.log("\nContact edited successfully.\n");
      //show new contact list
      displayContactList();
    } else {
      console.log("\nContact not found.\n");
    }
    //console.log("No '@' found in the string.");
  }
};

//prompt
console.log("-------------");

//Add?

let userAdd = prompt("Do you want to add an user? Yes/No: ");
console.log(userAdd);
userAdd = userAdd.toLowerCase();

if (userAdd == "yes") {
  let id = prompt("Enter the user´s id: ");
  console.log("Id:", id);
  let name = prompt("Enter the user´s name: ");
  console.log("Name:", name);
  let lastname = prompt("Enter the user´s last name: ");
  console.log("Last Name:", lastname);
  let phone = prompt("Enter the user´s phone: ");
  console.log("Phone:", phone);
  let email = prompt("Enter the user´s email: ");
  console.log("Email:", email);
  let city = prompt("Enter the user's city of residence: ");
  console.log("City:", city);
  let address = prompt("Enter user´s address: ");
  console.log("Address:", address);

  addContact(id, name, lastname, phone, email, city, address);
}

console.log("-------------");

//Delete?

let userDelete = prompt("Do you want to delete an user? Yes/No: ");
console.log(userDelete);
userDelete = userDelete.toLowerCase();

if (userDelete == "yes") {
  let valueToDelete = prompt("Please Enter user id or email: ");
  console.log(valueToDelete);
  deleteContact(valueToDelete);
}

console.log("-------------");

//Edit?

let userEdit = prompt("Do you want to edit an user? Yes/No: ");
console.log(userEdit);
userEdit = userEdit.toLowerCase();

if (userEdit == "yes") {
  let contactToEdit = prompt("Please Enter user id or email: ");
  console.log(contactToEdit);
  editContact(contactToEdit);
}

console.log("\n---That´s all-----\n");
