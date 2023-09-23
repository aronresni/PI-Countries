import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterContinent, orderPopulation, orderName } from '../../redux/actions/actions'
import "./Filters.css"
const Filters = () => {
    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch();
    const [selectedOrderName, setSelectedOrderName] = useState("Select");
    const [selectedOrderPopulation, setSelectedOrderPopulation] = useState("Select");
    const [selectedContinent, setSelectedContinent] = useState("All");


    function handleFilter(e) {
        const selectedValue = e.target.value;
        setSelectedContinent(selectedValue);
        setSelectedOrderName("Select");
        setSelectedOrderPopulation("Select");
        dispatch(filterContinent(selectedValue));
    }

    function handleOrderPopulation(e) {
        const selectedValue = e.target.value;
        setSelectedOrderPopulation(selectedValue);
        setSelectedOrderName("Select");
        setSelectedContinent("All");
        dispatch(orderPopulation(selectedValue));
    }
    function handlerOrderName(e) {
        const selectedValue = e.target.value;
        setSelectedOrderName(selectedValue);
        setSelectedOrderPopulation("Select");
        setSelectedContinent("All");
        dispatch(orderName(selectedValue));
    }



    return (
        <div className='filter-container'>
            <div>
                <select value={selectedOrderName} onChange={handlerOrderName} >
                    <option>Select</option>
                    <option value="asc">
                        Ascendent
                    </option>
                    <option value="dsc">
                        Descendent
                    </option>
                </select>
            </div>

            <div>
                <select value={selectedOrderPopulation} onChange={handleOrderPopulation} >
                    <option>Select</option>
                    <option value="Higher">
                        Higher
                    </option>
                    <option value="Lower">
                        Lower
                    </option>
                </select>
            </div>

            <div>
                <select className='filter-region' value={selectedContinent} onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Africa">África</option>
                    <option value="Americas">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceanía</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
