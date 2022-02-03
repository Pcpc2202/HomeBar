import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

const CreateRecipe = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {}, [data]);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  const submitForm = async (e) => {
    await Axios.post("http://localhost:4000/recipe/", {
      name: data.name,
      description: data.description,
    });
  };

  return (
    <div>
      <Form className='rounded p-4 p-sm-3'>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <br />
          <Form.Control
            onChange={(e) => handleInput(e)}
            type='text'
            name='name'
            value={data.name}
            placeholder='Enter Name'
          />
          <br />
        </Form.Group>

        <Form.Group className='mb-3'>
          <br />
          <Form.Label>Description</Form.Label>
          <br />
          <Form.Control
            onChange={(e) => handleInput(e)}
            type='text'
            name='description'
            value={data.description}
            placeholder='Enter Description'
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={submitForm}>
          Submit Recipe
        </Button>
      </Form>
    </div>
  );
};

export default CreateRecipe;
