import { GET_COUNTRIES, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME, GET_ACTIVITIES, POST_ACTIVITY, FILTER_BY_CONTINENT, CLEAR_COUNTRY_DATA } from "./actions/constants";

const initialState = {
    countries: [],
    allCountries: [],
    country: [],
    activities: [],
    error: null,
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }
        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case POST_ACTIVITY:
            return { ...state }


        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filterContinent = action.payload === "All" ? allCountries : allCountries.filter(element => element.continent === action.payload)
            return {
                ...state,
                countries: filterContinent
            }
        case CLEAR_COUNTRY_DATA:
            return {
                ...state,
                countries: null,
            };

        default:
            return { ...state }
    };
}





export default countriesReducer
