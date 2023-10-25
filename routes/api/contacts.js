const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody, isValidId, authenticate } = require("../../middlewares");
// const schemas = require("../../schemas/contacts");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrl.listContacts);
router.get("/:id", authenticate, isValidId, ctrl.getById);

// router.post("/", validateBody(schemas.addContact), ctrl.addContact); // не могу понять почему не работает validateBody(schemas.addContact)
router.post("/", authenticate, ctrl.addContact);

// router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateContact); // не могу понять почему не работает validateBody(schemas.addContact)
router.put("/:id", authenticate, isValidId, ctrl.updateContact);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

module.exports = router;
