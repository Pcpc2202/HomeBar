import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OptionsPage = () => {
  return (
    <>
      <Link to='/recipes'>
        <Button>Get your Recipes</Button>
      </Link>
      <Link to='/edit'>
        <Button>Edit your Recipes</Button>
      </Link>
      <Link to='/create'>
        <Button>Create your Recipe</Button>
      </Link>
    </>
  );
};

export default OptionsPage;
