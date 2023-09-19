import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName, getCountries } from '../../redux/actions/actions'



const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    function changeHandler(e) {
        e.preventDefault();
        const inputValue = e.target.value;
        setInput(inputValue)
        dispatch(getCountriesByName(input));
    }

    function handleSearch() {
        if (input.trim() === "") {
            dispatch(getAllCountries());
        } else {
            dispatch(getCountriesByName(input));
        }
        setInput("");


    }





    return (
        <div>
            <input value={input} onChange={changeHandler} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar
