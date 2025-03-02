import React, { useMemo } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar.jsx';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    // ✅ Memoize filtered recipes to prevent unnecessary re-renders
    const filteredRecipes = useMemo(() => {
        return recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [recipes, searchTerm]);

    return (
        <div>
            <h1>Recipes</h1>
            <SearchBar />

            {/* Add Recipe Button */}
            <Link to="/addrecipeform" style={{ marginBottom: '10px', display: 'block' }}>
                <button>Add Recipe</button>
            </Link>

            {filteredRecipes.length === 0 ? (
                <p>No recipes found</p>
            ) : (
                <ul>
                    {filteredRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>
                                {/* ✅ Link to Recipe Details */}
                                <Link to={`/recipedetails/${recipe.id}`}>
                                    {recipe.title}
                                </Link>
                            </h3>
                            <p>{recipe.description}</p>

                            {/* ✅ Link to Edit Recipe */}
                            <Link to={`/editrecipeform/${recipe.id}`}>
                                <button>Edit</button>
                            </Link>

                            {/* Delete Button */}
                            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeList;
