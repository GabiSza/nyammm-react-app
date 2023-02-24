import React from 'react'
import {useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => { 

        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=ba5c2b5b57d0449e9abafed8e94e5d69&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };
useEffect(() => {
    getSearched(params.search);
    // we can add here params.searched as we have it in Page.jsx Route
}, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return(
            <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
            </Card>
        );
      })}
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;



export default Searched;

