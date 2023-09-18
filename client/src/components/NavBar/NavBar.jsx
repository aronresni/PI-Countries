import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/home">
                <h1>COUNTRIES APP</h1>
            </Link>
            <SearchBar />
            <div>
                <button>ADD ACTIVITY</button>
                <button>COUNTRIES</button>
            </div>
        </div>
    )
}

export default NavBar
