console.log("RUSLAN --- HELLO");
console.log(process.argv);

const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");
console.log(contactsPath);
