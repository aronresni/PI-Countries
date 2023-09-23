import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import "./NavBar.css"
import logo from "../../assets/earth.png"

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/home';


    return (
        <div className="navbar">
            <a href="/home">
                <img className='logo' src={logo} width="100px" />
            </a>
            {isHomePage && <SearchBar />}
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
