import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterContinent, orderPopulation, orderName } from '../../redux/actions/actions'

const Filters = () => {
    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch();

    function handleFilter(e) {
        dispatch(filterContinent(e.target.value))
    }

    function handleOrderPopulation(e) {
        dispatch(orderPopulation(e.target.value))
    }
    function handlerOrderName(e) {
        dispatch(orderName(e.target.value))
    }



    return (
        <>
            <div>
                <select onChange={handlerOrderName} >
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
                <select onChange={handleOrderPopulation} >
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
                <select className='filter-region' onChange={handleFilter}>
                    <option value="All">Todos</option>
                    <option value="Africa">África</option>
                    <option value="Americas">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceanía</option>
                </select>
            </div>
        </>
    )
}

export default Filters
