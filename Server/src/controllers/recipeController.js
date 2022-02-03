const { recipeModels } = require("../models");
const { RecordNotFoundError, InvalidDataError } = require("../error-types");

const getAllRecipesController = async (_req, res, next) => {
  try {
    const recipes = await recipeModels.getAllRecipes();
    if (!recipes) throw RecordNotFoundError();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

const getRecipesFromUserIdController = async (req, res, next) => {
  try {
    const recipes = await recipeModels.getRecipesFromUserId(req.currentUser.id);
    if (recipes.length <= 1) throw new RecordNotFoundError("Recipes not found");
    res.status(200).send(recipes);
  } catch (error) {
    next(error);
  }
};

const insertRecipeController = async (req, res, next) => {
  try {
    const createdRecipe = await recipeModels.createNewRecipe({
      ...req.body,
      user_id: req.currentUser.id,
    });
    if (!createdRecipe) throw new InvalidDataError("Missing data");
    res.status(201).json(createdRecipe);
  } catch (error) {
    next(error);
  }
};

const deleteRecipeController = async (req, res, next) => {
  const targetId = req.params.id;
  const destroy = await recipeModels.deleteRecipe(targetId);
  try {
    if (destroy.affectedRows === 1) res.status(200).send("🎉 User deleted!");
    else throw new RecordNotFoundError("User not found");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipesController,
  getRecipesFromUserIdController,
  insertRecipeController,
  deleteRecipeController,
};
