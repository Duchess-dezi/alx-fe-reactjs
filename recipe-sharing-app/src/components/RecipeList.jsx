import React, { useMemo } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar.jsx';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes || []);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);
    const favorites = useRecipeStore(state => state.favorites || []);

    // Memoize filtered recipes to prevent unnecessary re-renders
    const filteredRecipes = useMemo(() => {
        if (!recipes || recipes.length === 0) return [];
        return recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [recipes, searchTerm]);

    return (
        <div>
            <h1>Recipes</h1>
            <SearchBar />
            <FavoritesList />
            <RecommendationsList />

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
                                {/*Link to Recipe Details */}
                                <Link to={`/recipedetails/${recipe.id}`}>
                                    {recipe.title}
                                </Link>
                            </h3>
                            <p>{recipe.description}</p>
                            {favorites.includes(recipe.id) ? (
                                <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
                            ) : (
                                <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
                            )}

                            {/* Link to Edit Recipe */}
                            <Link to={`/editRecipeForm/${recipe.id}`}>
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
