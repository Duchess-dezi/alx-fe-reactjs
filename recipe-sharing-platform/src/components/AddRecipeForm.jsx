import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Validation checks
        if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
            setError("All fields are required.");
            return;
        }

        const ingredientList = ingredients.split(",").map((item) => item.trim());
        if (ingredientList.length < 2) {
            setError("Please enter at least two ingredients, separated by commas.");
            return;
        }

        // Create new recipe object
        const newRecipe = {
            id: Date.now(),
            title,
            summary: instructions.substring(0, 100) + "...", // Short summary
            image: "https://via.placeholder.com/150", // Placeholder image
            ingredients: ingredientList,
            instructions: instructions.split("\n").map((instruction) => instruction.trim()),
        };

        // Call the parent function to add the recipe
        onAddRecipe(newRecipe);

        // Reset form fields
        setTitle("");
        setIngredients("");
        setInstructions("");
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Recipe</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Recipe Title */}
                <div>
                    <label className="block text-gray-700 font-medium">Recipe Title:</label>
                    <input
                        type="text"
                        className="w-full border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter recipe title"
                    />
                </div>

                {/* Ingredients */}
                <div>
                    <label className="block text-gray-700 font-medium">Ingredients:</label>
                    <textarea
                        className="w-full border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="e.g. Flour, Sugar, Butter, Eggs"
                    />
                </div>

                {/* Preparation Steps */}
                <div>
                    <label className="block text-gray-700 font-medium">Preparation Steps:</label>
                    <textarea
                        className="w-full border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Enter step-by-step preparation"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
