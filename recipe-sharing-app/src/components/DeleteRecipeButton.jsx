import React from 'react';
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const { deleteRecipe } = useRecipeStore(); // Destructure the deleteRecipe action

    // Handle button click
    const handleDelete = () => {
        deleteRecipe(recipeId); // Call the deleteRecipe action with the recipe ID
    };
    const navigate = useNavigate();

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete
        </button>
    );
};

export default DeleteRecipeButton;