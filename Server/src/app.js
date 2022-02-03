const { userRoutes, recipeRoutes } = require("./routes");

const setupRoutes = (app) => {
  app.use("/users", userRoutes);
  app.use("/recipe", recipeRoutes);
};

module.exports = { setupRoutes };
