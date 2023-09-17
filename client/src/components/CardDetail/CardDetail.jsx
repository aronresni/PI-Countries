import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCountriesById } from '../../redux/actions/actions'
const CardDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const country = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountriesById(id))
    }, [dispatch, id]);

    return (
        <div className='container'>
            <div key={country.id}>
                <img src={country.flag} />
                <h2>{country.name}</h2>
                <p>Capital: {country.capital}</p>
                <p>subregion: {country.subregion}</p>
                


            </div>

            <Link to="/home">Volver a la lista de países</Link>
        </div>
    )
}

export default CardDetail
