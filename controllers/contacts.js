// const contacts = require("../models_old/contacts");
const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

// @ GET /api/contacts
// const listContacts = async (req, res) => {
//   const result = await contacts.listContacts();
//   res.json(result);
// };
const listContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  // const result = await Contact.find({}, "name");
  res.json(result);
};

// //@ GET /api/contacts/:id
// const getById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };
const getById = async (req, res) => {
  const { id } = req.params;
  // const result = await Contact.findOne({ _id: id });
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

// @ POST /api/contacts
const addContact = async (req, res) => {
  // const result = await contacts.addContact(req.body);
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// //@ PUT /api/contacts/:id
const updateContact = async (req, res) => {
  const { id } = req.params;
  // const result = await contacts.updateContact(id, req.body);
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

// //@ DELETE /api/contacts/:id
const removeContact = async (req, res) => {
  const { id } = req.params;
  // const result = await contacts.removeContact(id);
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  // res.status(204).send()
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  removeContact: ctrlWrapper(removeContact),
};
