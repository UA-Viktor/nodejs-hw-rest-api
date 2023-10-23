const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "..", "models", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === id) || null;
};

const addContact = async (body) => {
  const { nanoid } = await import("nanoid");
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex === -1) {
    return null; // Контакт с таким id не найден
  }
  const updatedContact = { ...contacts[contactIndex], ...body };
  contacts[contactIndex] = updatedContact;
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return updatedContact;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const removedContact = contacts.find((contact) => contact.id === id);
  if (!removedContact) return null;
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
  return removedContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
