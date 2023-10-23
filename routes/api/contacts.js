const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody } = require("../../middlewares");
// const schemas = require("../../schemas/contacts");
const { schemas } = require("../../models/contact");

router.get("/", ctrl.listContacts);
// router.get("/:id", ctrl.getById);
// router.post("/", validateBody(schemas.addContact), ctrl.addContact);
// router.post("/", ctrl.addContact);
// router.delete("/:id", ctrl.removeContact);
// router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;
