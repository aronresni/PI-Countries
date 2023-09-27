import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCountriesById } from '../../redux/actions/actions'
import "./CardDetail.css"


const CardDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const country = useSelector(state => state.countries)
    useEffect(() => {
        dispatch(getCountriesById(id))
    }, [dispatch, id]);

    return (
        <div className='detail-container'>
            <div className='detail-container'>
                <div className='country-detail'>
                    <img className='flag-img' src={country.flag} alt={`Flag of ${country.name}`} />
                    <div className='card-info'>
                        <h2>{country.name}</h2>
                        <p>ID: {country.id}</p>
                        <p>Continent: {country.continent}</p>
                        <p>Capital: {country.capital}</p>
                        <p>Subregion: {country.subregion}</p>
                        {country.area && <p>Área: {country.area}</p>}
                        <p>Población: {country.population}</p>
                    </div>
                </div>
                <div>

                    <h3>Activities:</h3>
                    {country && country.Activities && country.Activities.length > 0 ? (
                        <ul>
                            {country.Activities.map((activity) => (
                                <li key={activity.id}>
                                    <p>Name: {activity.name}</p>
                                    <p>Difficulty: {activity.difficulty}</p>
                                    <p>Duration: {activity.duration} hours</p>
                                    <p>Season: {activity.season}</p>
                                </li>
                            ))}
                        </ul>

                    ) : (
                        <p>No activities available for this country.</p>
                    )}
                </div>
            </div>

            <Link to="/home">
                <button className='btn-home'>Back to home</button>
            </Link>
        </div>

    )
}

export default CardDetail
