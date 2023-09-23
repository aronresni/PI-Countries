import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName, getCountries } from '../../redux/actions/actions'
import "./SearchBar.css"


const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    function changeHandler(e) {
        e.preventDefault();
        const inputValue = e.target.value;
        setInput(inputValue)
        dispatch(getCountriesByName(input));
    }

    /*   function handleSearch() {
           if (input.trim() === "") {
               dispatch(getAllCountries());
           } else {
               dispatch(getCountriesByName(input));
           }
           setInput("");
   
   
       }
   
   */
    return (
        <>
            <div className='input-wrapper'>
                <input className='input' value={input} placeholder="Search any country here" onChange={changeHandler} />
            </div>
        </>
    )
}

export default SearchBar

/* <div>

       <button onClick={handleSearch}>Search</button>
   </div>
   */