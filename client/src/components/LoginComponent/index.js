import React, { useEffect, useState } from "react";
import { Form, Button, Nav } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const LogIn = () => {
  const [loginState, setLoginState] = useState("login");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, [data]);

  let navigate = useNavigate();
  let path = "/options";

  const handleClickLogin = () => {
    if (loginState === "login") setLoginState("register");
    else setLoginState("login");
  };

  const submitForm = async (e) => {
    if (loginState === "login") {
      e.preventDefault();
      await Axios.post("http://localhost:4000/users/login", {
        email: data.email,
        password: data.password,
      }).then((response) => {
        console.log(response);
        navigate(path);
      });
    } else if (loginState === "register") {
      e.preventDefault();
      await Axios.post("http://localhost:4000/users/register", {
        email: data.email,
        password: data.password,
      });
      if (!data) alert("invalid");
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  return (
    <>
      <div className='color-overlay d-flex justify-content-center align-items-center'>
        <Nav variant='pills'>
          <Nav.Item eventKey='link'>
            <Nav.Link
              onClick={handleClickLogin}
              style={{ marginInline: "20px" }}
            >
              LogIn
            </Nav.Link>
          </Nav.Item>
          <Nav.Item eventKey='link1'>
            <Nav.Link onClick={handleClickLogin}>Register</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form className='rounded p-4 p-sm-3'>
          <Form.Group className='mb-3'>
            <Form.Label>Email Address</Form.Label>
            <br />
            <Form.Control
              onChange={(e) => handleInput(e)}
              type='email'
              name='email'
              value={data.email}
              placeholder='Enter Email'
            />
            <br />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Control
              onChange={(e) => handleInput(e)}
              type='password'
              name='password'
              value={data.password}
              placeholder='Enter Password'
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={submitForm}>
            {loginState}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LogIn;
