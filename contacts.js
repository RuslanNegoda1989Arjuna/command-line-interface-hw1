const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

async function wrightDb(db) {
  await fs.writeFile(contactsPath, JSON.stringify(db, null, -2));
}

// TODO: задокументувати кожну функцію
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    console.table(contacts);
    return contacts;
  } catch (error) {
    console.error(error);
  }
}
// console.log(listContacts());
// listContacts();

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactById = contacts.find(
    (contact) => contactId === Number(contact.id)
  );
  if (!contactById) {
    return `Not found this id: ${contactId}`;
  }
  console.table(contactById);
  return contactById;
}
// console.log(getContactById(1));

async function removeContact(contactId) {
  const contacts = await listContacts();
  const updateContacts = contacts.filter(
    (contact) => Number(contact.id) !== contactId
  );
  if (!updateContacts) {
    return `Not found this id: ${contactId}`;
  }
  console.table(updateContacts);
}
console.log(removeContact(1));

async function addContact(name, email, phone) {
  // ...твій код
}
