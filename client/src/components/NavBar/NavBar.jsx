import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="navbar">
            <a href="/home">
                <h1>COUNTRIES APP</h1>
            </a>
            <SearchBar />
            <div>
                <Link to="/form">
                    <button>ADD ACTIVITY</button>

                </Link>
                <button>COUNTRIES</button>
            </div>
        </div>
    )
}

export default NavBar
