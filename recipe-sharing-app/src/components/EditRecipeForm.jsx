import React, { useState } from "react";
import useRecipeStore from "./recipeStore";


const EditRecipeForm = ({ recipe, onClose }) => {
    const { updateRecipe } = useRecipeStore();
    const [name, setName] = useState(recipe.name)
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(','));

    //To handle form submitt
    const handleSubmit = (e) => {
        e.preventDefault();
        //To convert ingredients strings to array
        const updatedIngredients = ingredients.split(',').map((item) => item.trim());
        //To create the updated recipe object
        const updatedRecipe = {
            name,
            ingredients: updatedIngredients,
        };
        //call the updateRecipe action
        updateRecipe(recipe.Id, updatedRecipe);
        //to close the form
        onClose();
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                {/* recipe name input */}
                <div>
                    <label htmlFor="name">Recipe Name: </label>
                    <input type="text" id="name" value={name}
                        onChange={(e) => setName(e.target.value)} required />
                </div>

                {/* recipe ingredients input */}
                <div>
                    <label htmlFor="ingredients">Ingredients (comma-separated); </label>
                    <input type="text" id="ingredients" value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)} required />
                </div>
                {/* submit button */}
                <button type="submit">Save Changes</button>
                {/* cancel button */}
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditRecipeForm;