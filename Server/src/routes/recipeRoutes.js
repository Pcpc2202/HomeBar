const express = require("express");
const { recipeController } = require("../controllers");
const { authMiddleware } = require("../middleware");

const recipeRoutes = express.Router();

recipeRoutes.get("/", recipeController.getAllRecipesController);
recipeRoutes.get(
  "/current",
  authMiddleware,
  recipeController.getRecipesFromUserIdController
);
recipeRoutes.post("/", authMiddleware, recipeController.insertRecipeController);

recipeRoutes.delete("/:id", recipeController.deleteRecipeController);

module.exports = recipeRoutes;
