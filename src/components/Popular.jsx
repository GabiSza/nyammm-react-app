import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

//I wanted to create a separate .env file for the apikey but it did not work out. 
//Also the spoonacular API is limited, only 150 requests per day. Then the app stops working.

function Popular() {
   const [popular, setPopular] = useState([]);
//as soon as the component gets mounted, it will run this getPopular function
//the empty [] is needed at the end to run it only when the component is mounted
//this will give us an Object
//I kept running into the 'not authorized' error because of the .env file... this Spoonacular API was not working well
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

      const check = localStorage.getItem('healthy');

      if(check) {
        setPopular(JSON.parse(check));
      } else {
        //getting data from the spoonacular API
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=ba5c2b5b57d0449e9abafed8e94e5d69&number=9`);
        //saving it into a variable
        const data = await api.json();

        localStorage.setItem("healthy", JSON.stringify(data.recipes));
    //here the recipes are an array that holds objects and we need to get them
      setPopular(data.recipes);
      console.log(data.recipes);
      }
      
    };

  return (
    <div>
   <Wrapper>
        <h3>Healthy Picks</h3>

        <Splide 
        options={{
          perPage:4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
        >
        {popular.map((recipe) => {
//here we are looping through each recipes
//without the key prop I kept getting an error as well - we need to add the id as each recipe has an id
         
         return(
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
              </SplideSlide>
          );
        })}
        </Splide>
    </Wrapper>
     
    </div>
  );
  }

const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
export default Popular;
