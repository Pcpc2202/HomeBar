import React, { useState, useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Axios from "axios";
import "./style.css";
import image from "../../assets/image.png";
import Delete from "../DeleteRecipe";

const RecipeCard = () => {
  const [yourRecipes, setYourRecipes] = useState();
  let user = document.cookie;
  useEffect(() => {
    cards();
  }, []);
  const cards = async () =>
    await Axios.get("http://localhost:4000/recipe/current").then((response) => {
      console.log(response.data);
      return setYourRecipes(response.data);
    });
  console.log({ yourRecipes });
  return (
    <div>
      {user && yourRecipes ? (
        <>
          <Container className='favourite-container'>
            <Row>
              {yourRecipes.map((el) => (
                <>
                  {console.log(el)}
                  <Card>
                    <div className='new-overflow'></div>
                    <Card.Body className='text-center'>
                      <Card.Img src={image} style={{ height: "25vh" }} />
                      <Card.Title>{el.title}</Card.Title>
                      <Card.Text>{el.description}</Card.Text>
                    </Card.Body>
                    <Delete id={el.id} />
                  </Card>
                </>
              ))}
            </Row>
          </Container>
        </>
      ) : (
        <p>No Recipes Found</p>
      )}
    </div>
  );
};

export default RecipeCard;
