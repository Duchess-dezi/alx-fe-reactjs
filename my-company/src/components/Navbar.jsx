
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul style={{ backgroundColor: 'darkblue', listStyle: 'none', display: 'flex', justifyContent: 'flexStart', gap: '20px' }}>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;