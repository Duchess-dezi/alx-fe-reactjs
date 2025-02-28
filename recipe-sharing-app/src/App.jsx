import { useState } from 'react'
import './App.css'
import RecipeList from './components/recipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {


  return (
    <>
      <RecipeList />
      <AddRecipeForm />

    </>
  )
}

export default App
