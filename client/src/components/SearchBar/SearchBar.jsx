// SearchBar.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getActivitiesByName, getCountriesByName } from '../../redux/actions/actions'; // Importa tus acciones aquí

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [searchType, setSearchType] = useState("Countries"); // Estado para el tipo de búsqueda

    function changeHandler(e) {
        e.preventDefault();
        const inputValue = e.target.value;
        setInput(inputValue);

        // Decide qué acción de búsqueda se debe despachar según el tipo seleccionado
        if (searchType === "Countries") {
            dispatch(getCountriesByName(inputValue));
        } else if (searchType === "Activities") {
            dispatch(getActivitiesByName(inputValue));
        }
    }

    function handleTypeChange(e) {
        setSearchType(e.target.value);
        setInput(""); // Reinicia el valor de búsqueda al cambiar el tipo
    }

    return (
        <>
            <div className='input-wrapper'>
                <select value={searchType} onChange={handleTypeChange}>
                    <option value="Countries">Countries</option>
                    <option value="Activities">Activities</option>
                </select>
                <input
                    className='input'
                    value={input}
                    placeholder={`Search by ${searchType}`}
                    onChange={changeHandler}
                />
            </div>
        </>
    )
}

export default SearchBar;
