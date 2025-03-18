import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import recipesData from '../src/data.json'


function App() {
  const [recipes, setRecipes] = useState(recipesData);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  return (
    <div className='bg-white min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={addRecipe} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;