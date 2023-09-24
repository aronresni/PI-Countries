import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"
const LandingPage = () => {
    return (
        <div>
            <div className='button-container'>
                <Link to="/home">
                    <button className="button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Start&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Start&nbsp;</span>
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default LandingPage
