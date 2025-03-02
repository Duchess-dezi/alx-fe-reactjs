import React, { useMemo } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    // ✅ Use useMemo to prevent infinite loops
    const recipes = useRecipeStore(state => state.recipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    // ✅ Memoize the filtered recipes
    const filteredRecipes = useMemo(() => {
        return recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [recipes, searchTerm]);


    return (
        <div>
            <h1>Recipes</h1>
            {filteredRecipes.length === 0 ? (
                <p>No recipes found</p>
            ) : (
                <ul>
                    {filteredRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
<<<<<<< HEAD:recipe-sharing-app/src/components/recipeList.jsx

=======
>>>>>>> 983387543fb83126e4ac48b233d6ae0bd132553f:recipe-sharing-app/src/components/RecipeList.jsx
export default RecipeList;
