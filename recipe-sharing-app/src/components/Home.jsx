import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>


            <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <Link to="/recipelist" className='pb-3'>Recipe List</Link>
                <Link to="/addrecipeform" className=''>Add Recipe Form</Link>
                <Link to="/editrecipeform" className='pb-3'>Edit Recipe Form</Link>
                <Link to="/recipedetails/:recipeId" className='pb-3'>Recipe Details</Link>
            </div>

        </div>
    )
}

export default Home