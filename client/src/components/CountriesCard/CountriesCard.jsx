import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries, getActivities } from '../../redux/actions/actions';
import './CountriesCard.css';

const CountriesCard = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.allCountries);


    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities())
    }, [dispatch]);


    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container-cards">

            {currentCards.map((country) => (
                <Link key={country.id} to={`/country/${country.id}`}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={country.flag} alt={country.name} className="img-card" />
                                <h2>{country.name}</h2>
                            </div>


                            <div className="flip-card-back">
                                <p>Population: {country.population}</p>
                                <p>Continent: {country.continent}</p>
                                <p>Region: {country.subregion}</p>
                                <p>Area: {country.area}</p>

                            </div>

                        </div>
                    </div>
                </Link>
            ))}

            <div className="pagination">
                {Array.from({ length: Math.ceil(countries.length / cardsPerPage) }).map(
                    (_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`page-button ${currentPage === index + 1 ? 'active' : ''} paginado`}
                        >
                            {index + 1}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default CountriesCard;
