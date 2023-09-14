// countriesReducer.js

import { GET_COUNTRIES, FAIL } from "./actions/constants";

const initialState = {
    countries: [],
    error: null,
};

const getCountries = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                error: null,
            };
        case FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getCountries;
