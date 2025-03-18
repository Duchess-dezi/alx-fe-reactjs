import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({}); // State to store validation errors

    const validate = () => {
        let tempErrors = {};

        if (!title.trim()) tempErrors.title = "Recipe title is required.";
        if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required.";
        if (!steps.trim()) tempErrors.steps = "Preparation steps are required.";

        const ingredientList = ingredients.split(",").map((item) => item.trim());
        if (ingredientList.length < 2) {
            tempErrors.ingredients = "Please enter at least two ingredients.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return; // Stop submission if validation fails

        const newRecipe = {
            id: Date.now(),
            title,
            summary: steps.substring(0, 100) + "...",
            image: "https://via.placeholder.com/150",
            ingredients: ingredients.split(",").map((item) => item.trim()),
            instructions: steps.split("\n").map((step) => step.trim()),
        };

        onAddRecipe(newRecipe);

        // Reset form fields
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Recipe</h2>

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
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
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
                    {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
                </div>

                {/* Preparation Steps */}
                <div>
                    <label className="block text-gray-700 font-medium">Preparation Steps:</label>
                    <textarea
                        className="w-full border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        placeholder="Enter step-by-step preparation"
                    />
                    {errors.steps && <p className="text-red-500">{errors.steps}</p>}
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
