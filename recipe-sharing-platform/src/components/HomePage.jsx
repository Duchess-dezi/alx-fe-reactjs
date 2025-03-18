import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from '../data.json'
import AddRecipeForm from "./AddRecipeForm";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    // Load data from data.json
    useEffect(() => {
        setRecipes(data);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Recipe List</h1>

            <Link
                to="/add-recipe"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 inline-block hover:bg-green-700 transition"
            >
                Add New Recipe
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white shadow-lg rounded-lg p-4 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-50 object-cover rounded-md"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{recipe.title}</h2>
                            <p className="text-gray-600 mt-2">{recipe.summary}</p>
                            < Link
                                to={`/recipe/${recipe.id}`}
                                className="block text-blue-600 mt-2 hover:underline"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
};

export default HomePage;
