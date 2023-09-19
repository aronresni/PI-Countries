import { filterActivity } from "./actions/actions";
import { GET_COUNTRIES, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME, GET_ACTIVITIES, POST_ACTIVITY, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, FILTER_BY_ACTIVITY } from "./actions/constants";

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
        case ORDER_BY_NAME:
            const OrderCountries = [...state.allCountries];
            const OrderCountriesAll = action.payload === `asc` ?
                OrderCountries.sort((a, b) => a.name.localeCompare(b.name))
                :
                OrderCountries.sort((a, b) => b.name.localeCompare(a.name));
            return {
                ...state,
                countries: OrderCountriesAll
            }
        case ORDER_BY_POPULATION:
            const orderPopulation = [...state.allCountries];

            const orderPop = action.payload === "Higher" ?
                orderPopulation.sort((a, b) => b.population - a.population)
                :
                orderPopulation.sort((a, b) => a.population - b.population);
            return {
                ...state,
                countries: orderPopulation
            }
        case FILTER_BY_ACTIVITY:
            const filterActivity = [...state.allCountries];
            const activityName = action.payload;
            const filteredActivities = state.activities
                .filter(activity => activity.name === activityName)
                .flatMap(activity => activity.Countries)
                .map(country => country.name);

            const filteredCountries = filterActivity.filter(obj => filteredActivities.includes(obj.name))
            return {
                ...state,
                countries: filteredCountries
            }


        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filterContinent = action.payload === "All" ? allCountries : allCountries.filter(element => element.continent === action.payload)
            return {
                ...state,
                countries: filterContinent
            }

        default:
            return { ...state }
    };
}





export default countriesReducer
