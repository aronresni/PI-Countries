import React, { useState } from 'react';
import './FormPage.css';
import { postActivity } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FormPage = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [selectedCountry, setSelectedCountry] = useState(''); // País seleccionado
    const [selectedCountries, setSelectedCountries] = useState([]); // Países seleccionados

    // Agregar un país seleccionado
    const handleAddCountry = () => {
        if (selectedCountry !== '' && !selectedCountries.includes(selectedCountry)) {
            setSelectedCountries([...selectedCountries, selectedCountry]);
            setSelectedCountry('');
        }
    };

    // Eliminar un país seleccionado
    const handleRemoveCountry = (country) => {
        const updatedCountries = selectedCountries.filter((c) => c !== country);
        setSelectedCountries(updatedCountries);
    };

    // FORM
    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    });

    // SELECT COUNTRIES
    const countriesList = countries.map((country) => {
        return {
            name: country.name,
            flag: country.flag, // Asumiendo que tienes una propiedad 'image' en los datos de país
        };
    }).sort((a, b) => a.name.localeCompare(b.name));

    // Handle Form
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Handle Countries (actualizado para manejar múltiples selecciones)
    const handleCountries = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setForm({
            ...form,
            countries: selectedOptions, // Establecer como un array de países seleccionados
        });
    };

    // Handle Season
    const handleSeason = (e) => {
        setForm({
            ...form,
            season: e.target.value,
        });
    };

    // CALIFICACION:
    const [starValue, setStarValue] = useState(null);
    const handleStarChange = (e) => {
        setStarValue(e.target.value);
        setForm({
            ...form,
            difficulty: e.target.value,
        });
    };

    // Handle Duration
    const handleDuration = (e) => {
        setForm({
            ...form,
            duration: e.target.value,
        });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivity(form));
        alert('Activity created successfully');
        setForm({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: [],
        });
    };

    return (
        <>
            <Link to="/home">
                <button>Go Back</button>
            </Link>
            <h1>Activity Form</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleChange} value={form.name} />
                    </label>
                </div>
                <div>
                    <div>
                        <label>
                            Clasificacion:
                            <p className="clasificacion">
                                <input
                                    id="radio1"
                                    type="radio"
                                    name="estrellas"
                                    value="5"
                                    onChange={handleStarChange}
                                    checked={starValue === '5'}
                                />
                                <label htmlFor="radio1">★</label>
                                <input
                                    id="radio2"
                                    type="radio"
                                    name="estrellas"
                                    value="4"
                                    onChange={handleStarChange}
                                    checked={starValue === '4'}
                                />
                                <label htmlFor="radio2">★</label>
                                <input
                                    id="radio3"
                                    type="radio"
                                    name="estrellas"
                                    value="3"
                                    onChange={handleStarChange}
                                    checked={starValue === '3'}
                                />
                                <label htmlFor="radio3">★</label>
                                <input
                                    id="radio4"
                                    type="radio"
                                    name="estrellas"
                                    value="2"
                                    onChange={handleStarChange}
                                    checked={starValue === '2'}
                                />
                                <label htmlFor="radio4">★</label>
                                <input
                                    id="radio5"
                                    type="radio"
                                    name="estrellas"
                                    value="1"
                                    onChange={handleStarChange}
                                    checked={starValue === '1'}
                                />
                                <label htmlFor="radio5">★</label>
                            </p>
                        </label>
                    </div>
                </div>
                <div>
                    <label>
                        Duration:
                        <input type="text" name="duration" onChange={handleDuration} value={form.duration} />
                    </label>
                </div>
                <div>
                    <label>
                        Season
                        <select name="season" onChange={handleSeason} value={form.season}>
                        <option>Select One</option>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="winter">Winter</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Country (Select multiple):
                        <select
                            name="countries"
                            onChange={ handleAddCountry}
                           
                            value={form.countries}
                            
                        >
                            {countriesList?.map((country) => (
                                <option key={country.name} value={country.name}>
                                    {country.name}
                                    <img
                                        src={country.flag}
                                        alt={country.name}
                                        style={{ marginLeft: '5px', width: '30px', height: '20px' }}
                                    />
                                </option>
                            ))}
                        </select>
                    </label>
                   
                    <div>
                        <h2>Selected Countries:</h2>
                        <ul>
                            {selectedCountries.map((country, index) => (
                                <li key={index}>
                                    {country}
                                    <button onClick={() => handleRemoveCountry(country)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button type="submit">Create Activity</button>
            </form>
        </>
    );
};

export default FormPage;
