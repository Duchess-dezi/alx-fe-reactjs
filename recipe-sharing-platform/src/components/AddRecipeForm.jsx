import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

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
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const newRecipe = {
            id: Date.now(),
            title,
            summary: steps.substring(0, 100) + "...",
            image: "https://via.placeholder.com/150",
            ingredients: ingredients.split(",").map((item) => item.trim()),
            instructions: steps.split("\n").map((step) => step.trim()),
        };

        onAddRecipe(newRecipe);

        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                Add a New Recipe
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Recipe Title Input */}
                <div>
                    <label className="block text-gray-700 font-medium">Recipe Title:</label>
                    <input
                        type="text"
                        className="w-full border-gray-300 rounded-lg p-2 sm:p-3 md:p-4 lg:p-5 mt-1 focus:ring-2 focus:ring-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter recipe title"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                {/* Ingredients Input */}
                <div>
                    <label className="block text-gray-700 font-medium">Ingredients:</label>
                    <textarea
                        className="w-full border-gray-300 rounded-lg p-2 sm:p-3 md:p-4 lg:p-5 mt-1 focus:ring-2 focus:ring-blue-500 sm:h-20 md:h-24 lg:h-28"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="e.g. Flour, Sugar, Butter, Eggs"
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
                </div>

                {/* Preparation Steps Input */}
                <div>
                    <label className="block text-gray-700 font-medium">Preparation Steps:</label>
                    <textarea
                        className="w-full border-gray-300 rounded-lg p-2 sm:p-3 md:p-4 lg:p-5 mt-1 focus:ring-2 focus:ring-blue-500 sm:h-28 md:h-32 lg:h-40"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        placeholder="Enter step-by-step preparation"
                    />
                    {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg hover:bg-blue-700 transition"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
