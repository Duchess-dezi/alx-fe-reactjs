import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import Home from './components/Home';
import SearchBar from './components/SearchBar';

function App() {
  return (

    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/addrecipeform" element={<AddRecipeForm />} />
        <Route path="/editrecipeform/:recipeId" element={<EditRecipeForm />} />
        <Route path="/recipedetails/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;