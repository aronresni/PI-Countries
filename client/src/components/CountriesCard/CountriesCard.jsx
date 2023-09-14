import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import {getCountries} from '../../redux/actions/actions';



const CountriesCard = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);


    return (
        <div>
            {countries.map(country => (
                <div key={country.id} className="country-card">
                    <Link to={`/country/${country.id}`}>
                        <img src={country.flag} alt={country.name} />
                        <h2>{country.name}</h2>
                        <p>Population: {country.population}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default CountriesCard