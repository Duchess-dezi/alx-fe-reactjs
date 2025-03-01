import React from 'react';
import useRecipeStore from './recipeStore'; // Import the store

const DeleteRecipeButton = ({ recipeId }) => {
    const { deleteRecipe } = useRecipeStore(); // Destructure the deleteRecipe action

    // Handle button click
    const handleDelete = () => {
        deleteRecipe(recipeId); // Call the deleteRecipe action with the recipe ID
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete
        </button>
    );
};

export default DeleteRecipeButton;