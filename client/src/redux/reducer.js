import { GET_COUNTRIES, FAIL, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME } from "./actions/constants";

const initialState = {
    countries: [],
    error: null,
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
        case GET_COUNTRIES_BY_NAME:
        case GET_COUNTRIES_BY_ID:
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






export default countriesReducer;
