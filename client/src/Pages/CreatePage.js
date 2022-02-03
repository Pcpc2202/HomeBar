import React from "react";
import CreateRecipe from "../components/CreateRecipe";
import Navigation from "../components/Navbar";

const CreatePage = () => {
  return (
    <div>
      <Navigation />
      <CreateRecipe />
    </div>
  );
};

export default CreatePage;
