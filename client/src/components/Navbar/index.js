import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import Axios from "axios";
import "./style.css";

const Navigation = () => {
  let navigate = useNavigate();
  let path = "/";

  const logout = async (e) => {
    e.preventDefault();
    await Axios.get("http://localhost:4000/users/logout").then((response) => {
      console.log(response);
      navigate(path);
    });
  };

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/options'>
              Back
            </Nav.Link>
            <Button onClick={logout}>LogOut</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
