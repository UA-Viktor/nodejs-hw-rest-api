const express = require("express");
const ctrl = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationCode", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent); // проверка на авторизацию
router.post("/logout", authenticate, ctrl.logout); // выход из аккаунта

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
); // выход из аккаунта

module.exports = router;
