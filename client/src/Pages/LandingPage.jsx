import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='container'>
            <div>
                <Link to="/home">
                    <button>START</button>
                </Link>
            </div>
        </div>

    )
}

export default LandingPage
