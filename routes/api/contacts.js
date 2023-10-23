const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");
// const schemas = require("../../schemas/contacts");
const { schemas } = require("../../models/contact");

router.get("/", ctrl.listContacts);
router.get("/:id", isValidId, ctrl.getById);

// router.post("/", validateBody(schemas.addContact), ctrl.addContact);
router.post("/", ctrl.addContact);

// router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateContact);
router.put("/:id", isValidId, ctrl.updateContact);
router.put("/:id", isValidId, ctrl.updateContact);

router.delete("/:id", isValidId, ctrl.removeContact);

module.exports = router;
