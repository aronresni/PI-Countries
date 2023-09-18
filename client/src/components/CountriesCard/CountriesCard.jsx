import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { getCountries } from '../../redux/actions/actions';
import "./CountriesCard.css"



const CountriesCard = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries)


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);



    return (
        <div className='container'>
            {countries.map(country => (
                <div key={country.id} className="card">
                    <Link to={`/country/${country.id}`}>
                        <img src={country.flag} alt={country.name} className="img-card" />
                        <h2>{country.name}</h2>
                        <p>Population: {country.population}</p>
                        <p>Continent: {country.continent}</p>
                        <p>Region: {country.subregion}</p>
                        <p>Area: {country.area}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default CountriesCard