import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterContinent } from '../../redux/actions/actions'

const Filters = () => {
    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch();

    function handleFilter(e) {
        dispatch(filterContinent(e.target.value))
    }

    return (
        <div>
            <select className='filter-region' onChange={handleFilter}>
                <option value="">Filter by Region</option>
                <option value="All">Todos</option>
                <option value="Africa">África</option>
                <option value="Americas">América</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
            </select>
        </div>
    )
}

export default Filters
