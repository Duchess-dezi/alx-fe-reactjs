import React, { useState } from "react";
import useRecipeStore from "./recipeStore";
import { useParams, useNavigate } from "react-router-dom";


const EditRecipeForm = () => {
    // const { updateRecipe } = useRecipeStore();
    // const [name, setName] = useState(recipe.name)
    // const [ingredients, setIngredients] = useState(recipe.ingredients.join(','));

    // //To handle form submitt
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     //To convert ingredients strings to array
    //     const updatedIngredients = ingredients.split(',').map((item) => item.trim());
    //     //To create the updated recipe object
    //     const updatedRecipe = {
    //         name,
    //         ingredients: updatedIngredients,
    //     };
    //     //call the updateRecipe action
    //     updateRecipe(recipe.Id, updatedRecipe);
    //     //to close the form
    //     onClose();
    // };


    const { recipeId } = useParams(); // Get recipe ID from URL
    const navigate = useNavigate();
    const { recipes, updateRecipe } = useRecipeStore(state => ({
        recipes: state.recipes,
        updateRecipe: state.updateRecipe
    }));


    // Find the recipe to edit
    const recipe = recipes.find((r) => r.id === parseInt(recipeId));

    // State for editing
    const [title, setTitle] = useState(recipe?.title || "");
    const [description, setDescription] = useState(recipe?.description || "");

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe(recipe.id, { title, description });
        navigate("/recipelist"); // Navigate back to list after update
    };

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                {/* recipe name input */}
                <div>
                    <label htmlFor="title">Recipe Title: </label>
                    <input type="text" id="title" value={title}
                        onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" value={description}
                        onChange={(e) => setDescription(e.target.value)} required />
                </div>
                {/* submit button */}
                <button type="submit">Save Changes</button>
                {/* cancel button */}
                <button type="button" onClick={() => navigate('/recipelist')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditRecipeForm;