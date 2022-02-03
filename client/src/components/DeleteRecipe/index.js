import React from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";

const Delete = ({ id }) => {
  console.log(id);
  const submitForm = async (e) => {
    e.preventDefault();
    await Axios.delete(`http://localhost:4000/recipe/${id}`);
  };
  return (
    <div>
      <Button onClick={submitForm}>Delete Recipe</Button>
    </div>
  );
};

export default Delete;
