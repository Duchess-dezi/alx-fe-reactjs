import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
    const { recipeId } = useParams(); //  Get recipe ID from URL
    const navigate = useNavigate();

    //  Fetch recipes and update function safely
    const recipes = useRecipeStore(state => state.recipes);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    // Use useMemo to prevent infinite loops
    const recipe = useMemo(() => {
        return recipes.find((r) => r.id === parseInt(recipeId));
    }, [recipes, recipeId]);

    //  Prevent errors if recipe is not found
    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    // Initialize state safely
    const [title, setTitle] = useState(recipe.title || "");
    const [description, setDescription] = useState(recipe.description || "");

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert("Title and Description cannot be empty!");
            return;
        }

        updateRecipe(recipe.id, { title, description });

        navigate("/recipelist"); // Redirect to recipe list after updating
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                {/* Recipe Title Input */}
                <div>
                    <label htmlFor="title">Recipe Title: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Recipe Description Input */}
                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                {/* Save and Cancel Buttons */}
                <button type="submit">Save Changes</button>
                <button type="button" onClick={() => navigate('/recipelist')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditRecipeForm;
