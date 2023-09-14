
import axios from "axios"
import { GET_COUNTRIES, FAIL } from "./constants"

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