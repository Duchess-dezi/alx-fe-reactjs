import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/addrecipeform" element={<AddRecipeForm />} />
        <Route path="/editrecipeform" element={<EditRecipeForm />} />
        <Route path="/recipedetails/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;