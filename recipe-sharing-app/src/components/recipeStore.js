import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // Initial state: an empty array of recipes

  //search 
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),


  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },


  // Action: Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      setRecipes: (recipes) => set({ recipes })
    })),

  // Action: Delete a recipe by its ID
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Action: Update a recipe by its ID
  updateRecipe: (recipeId, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe,
      ),
    })),
}));

export default useRecipeStore;