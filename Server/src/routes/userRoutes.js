const express = require("express");
const { userController } = require("../controllers");

const userRoutes = express.Router();

userRoutes.post("/login", userController.login);
userRoutes.post("/register", userController.register);
userRoutes.get("/logout", userController.logout);

module.exports = userRoutes;
