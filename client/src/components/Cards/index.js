import React, { useState, useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Axios from "axios";
import "./style.css";
import image from "../../assets/image.png";

const RecipeCard = () => {
  const [yourRecipes, setYourRecipes] = useState();

  Axios.defaults.withCredentials = true;

  const cards = async () =>
    await Axios.get("http://localhost:4000/current").then((response) => {
      console.log(response.data, "submited Reports array");
      return setYourRecipes(response.data);
    });
  useEffect(() => {
    cards();
  }, []);

  return (
    <div>
      <Container className='favourite-container'>
        <Row>
          {yourRecipes.map((el) => (
            <>
              <Card>
                <div className='new-overflow'></div>
                <Card.Body className='text-center'>
                  <Card.Img src={image} style={{ height: "25vh" }} />
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RecipeCard;
