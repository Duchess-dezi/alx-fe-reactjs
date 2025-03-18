import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json"; // Importing the mock data

const RecipeDetail = () => {
    const { id } = useParams(); // Get recipe ID from URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        // Find the recipe with the matching ID
        const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
        if (selectedRecipe) {
            setRecipe(selectedRecipe);
        }
    }, [id]);

    if (!recipe) {
        return <div className="text-center text-gray-600">Recipe not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full max-h-80 object-cover rounded-lg shadow-md"
            />
            <p className="text-lg text-gray-700 mt-4">{recipe.summary}</p>

            {/* Ingredients Section */}
            {recipe.ingredients && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Ingredients:
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Cooking Instructions */}
            {recipe.instructions && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Instructions:
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700">
                        {recipe.instructions.map((step, index) => (
                            <li key={index} className="mb-2">
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default RecipeDetail;
