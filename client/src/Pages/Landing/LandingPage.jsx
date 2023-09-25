import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from '../../assets/earth.png';

const LandingPage = () => {
  return (
    <div className='landing'>
      <div className='button-container'>
        <div className="logo-container">
          <img src={logo} className="logo-landing" alt="Logo" />
        </div>
        <Link to="/home">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Start&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;Start&nbsp;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
