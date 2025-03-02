import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>


            <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <Link to="/recipelist">Recipe List</Link>
                <Link to="/addrecipeform">Add Recipe Form</Link>
                <Link to="/editRecipeForm/:recipeId">Edit Recipe Form</Link>
                <Link to="/recipedetails/:recipeId">Recipe Details</Link>
            </div>

        </div>
    )
}

export default Home