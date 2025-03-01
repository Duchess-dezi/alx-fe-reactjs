import useRecipeStore from "./recipeStore";
import React from 'react'
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find((recipe) => recipe.id === recipeId));
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} onClose={() => window.history.back()} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>

    )
}

export default RecipeDetails;