import React, { useMemo } from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const favorites = useRecipeStore(state => state.favorites);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    //  Use useMemo to prevent unnecessary re-renders
    const favoriteRecipes = useMemo(() => {
        return favorites.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);
    }, [recipes, favorites]);

    return (
        <div>
            <h2>My Favorites</h2>
            {favoriteRecipes.length === 0 ? (
                <p>No favorite recipes yet.</p>
            ) : (
                favoriteRecipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritesList;
