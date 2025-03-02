import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore.js';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title, description });
        setTitle('');
        setDescription('');

        navigate('/recipelist');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />

            <button type="submit">  Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;