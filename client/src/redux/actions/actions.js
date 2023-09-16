
import axios from "axios"
import { GET_COUNTRIES, FAIL, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_ID } from "./constants"

const endpoint = "http://localhost:3001/countries"
export const getCountries = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${endpoint}/allcountries`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAIL,
                payload: error.response.data.msg
            })

        }
    }
}
export const getCountriesByName = (name) => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${endpoint}/name?name=${name}`)
            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAIL,
                payload: error.response.data.msg
            })
        }
    }
}
export const getCountriesById = (id) => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${endpoint}/${id}`)
            return dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAIL,
                payload: error.response.data.msg
            })
        }
    }


}





