const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");
console.log(contactsPath);

// TODO: задокументувати кожну функцію
async function listContacts() {
  try {
    const data = await fs.readFile("contactsPath", "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error);
  }
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
