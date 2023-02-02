const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

async function readDb() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const readContacts = JSON.parse(data);
    return readContacts;
  } catch (error) {
    console.error(error);
  }
}

async function wrightDb(db) {
  await fs.writeFile(contactsPath, JSON.stringify(db, null, -2));
}

// TODO: задокументувати кожну функцію
async function listContacts() {
  const contacts = await readDb();
  console.table(contacts);
  return contacts;
}
console.log(listContacts());

async function getContactById(contactId) {
  const contacts = await readDb();
  const contact = contacts.find((contact) => contactId == contact.id);
  console.table(contact);
}
console.log(getContactById(1));

async function removeContact(contactId) {
  const contacts = await readDb();
}

async function addContact(name, email, phone) {
  // ...твій код
}
