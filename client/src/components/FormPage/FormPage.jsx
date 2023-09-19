import React, { useState } from 'react'
import "./FormPage.css"
import { postActivity, getCountries } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { countReset } from 'console';

const FormPage = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)

    //SELECT COUNTRIES
    const countriesList = countries.map(country => {
        return ({
            name: country.name,
            flag: country.flags
        })
    }).sort((a, b) => a.name.localeCompare(b.name));


    //CALIFICACION:
    const [valorEstrella, setValorEstrella] = useState(null);
    const handleEstrellaChange = (event) => {
        setValorEstrella(event.target.value);
    };

    //FORM
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],

    })


    return (
        <>

            <h1>Activity Form</h1>
            <form className='form'>
                <div>

                    <label>
                        Name:
                        <input type="name" />
                    </label>
                </div>
                <div>

                    <label>
                        Clasificacion:
                        <p className="clasificacion">
                            <input
                                id="radio1"
                                type="radio"
                                name="estrellas"
                                value="5"
                                onChange={handleEstrellaChange}
                                checked={valorEstrella === '5'}
                            />
                            <label htmlFor="radio1">★</label>
                            <input
                                id="radio2"
                                type="radio"
                                name="estrellas"
                                value="4"
                                onChange={handleEstrellaChange}
                                checked={valorEstrella === '4'}
                            />
                            <label htmlFor="radio2">★</label>
                            <input
                                id="radio3"
                                type="radio"
                                name="estrellas"
                                value="3"
                                onChange={handleEstrellaChange}
                                checked={valorEstrella === '3'}
                            />
                            <label htmlFor="radio3">★</label>
                            <input
                                id="radio4"
                                type="radio"
                                name="estrellas"
                                value="2"
                                onChange={handleEstrellaChange}
                                checked={valorEstrella === '2'}
                            />
                            <label htmlFor="radio4">★</label>
                            <input
                                id="radio5"
                                type="radio"
                                name="estrellas"
                                value="1"
                                onChange={handleEstrellaChange}
                                checked={valorEstrella === '1'}
                            />
                            <label htmlFor="radio5">★</label>
                        </p>

                    </label>
                </div>

                <div>

                    <label>
                        Duracion:
                        <input type="duracion" />
                    </label>
                </div>
                <div>

                    <label >
                        Temporada
                        <select>
                            <option>Select One</option>
                            <option value="primavera">Spring</option>
                            <option value="verano">Summer</option>
                            <option value="otoño">Autumn</option>
                            <option value="invierno">Winter</option>
                        </select>
                    </label>
                </div>
                <div><label>Country
                    <select className='select-div' value={selected} onChange={event => [handleCountries(event), setSelected(event)]}>
                        <option>Select Country</option>
                        {countriesList?.map(country => {
                            return (
                                <option key={country.name}>
                                    {country.name}
                                </option>
                            )
                        })}
                    </select>

                </label></div>

            </form>
            <button>Create Activity</button>
        </>
    )
}

export default FormPage
