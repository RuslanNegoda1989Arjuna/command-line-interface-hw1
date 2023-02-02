const path = require("path");
const fs = require("fs").promises;
// const { nanoid } = require("nanoid");

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

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactById = contacts.find(
    (contact) => contactId === Number(contact.id)
  );
  if (!contactById) {
    return `Not found this id: ${contactId}`;
  }
  console.log(contactById);
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const findId = contacts.find((contact) => contact.id === String(contactId));
  if (!findId) {
    console.log(`Not found this id: ${contactId}`);
    return;
  }
  const updateContacts = contacts.filter(
    (contact) => Number(contact.id) !== contactId
  );

  await wrightDb(updateContacts);
  console.log(`Id: ${contactId} was deleted`);
}
console.log(removeContact(2));

async function addContact(name, email, phone) {
  // ...твій код
}
