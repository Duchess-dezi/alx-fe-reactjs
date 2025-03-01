import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore.js';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        // <div>
        //     {recipes.map(recipe => (
        //         <div key={recipe.id}>
        //             <h3>{recipe.title}</h3>
        //             <p>{recipe.description}</p>
        //         </div>
        //     ))}
        // </div>
        <div>
            <h1>Recipes</h1>
            <Link to="/addrecipeform">Add Recipe</Link>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>
                        <Link to={`/recipedetails/${recipe.id}`}>{recipe.title}</Link>
                    </h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};
export default RecipeList;
