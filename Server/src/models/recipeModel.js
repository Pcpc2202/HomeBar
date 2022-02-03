const connection = require("../../db-config");
const { createUser } = require("./userModel");

const db = connection.promise();

const getAllRecipes = async () => {
  const [recipes] = await db.query("SELECT * FROM recipe ");

  return recipes;
};

const getRecipesFromUserId = async (id) => {
  const [recipes] = await db.query("SELECT * FROM recipe WHERE user_id = ?", [
    id,
  ]);

  return recipes;
};

const createNewRecipe = async ({ name, description, user_id }) => {
  const createdRecipe = await db.query(
    "INSERT INTO recipe (name, description, user_id) VALUES ( ?, ?, ?)",
    [name, description, user_id]
  );

  const id = createdRecipe.insertId;

  return { id, name, description, user_id };
};

const deleteRecipe = async (id) => {
  const destroy = await db.query("Delete FROM recipe WHERE id = ?", [id]);
  return destroy;
};

module.exports = {
  getAllRecipes,
  getRecipesFromUserId,
  createNewRecipe,
  deleteRecipe,
};
