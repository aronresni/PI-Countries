import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import "./NavBar.css"
import logo from "../../assets/earth.png"

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/home';
    const isActivityPage = location.pathname === `/form`
    return (
        <div className="navbar">
            <a href="/home">
                <img className="logo" src={logo} width="100px" alt="Logo" />
            </a>
            {isHomePage && <SearchBar />}
            {isActivityPage ? null : (
                <div>
                    <Link to="/form">
                        <button className='btn-activity'>ADD ACTIVITY</button>
                    </Link>
                </div>
            )}
            {isActivityPage && (
                <Link to="/home">
                    <button className='btn-countries'>COUNTRIES</button>
                </Link>
            )}
        </div>
    );
}

export default NavBar
