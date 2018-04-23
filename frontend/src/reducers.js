import { combineReducers } from 'redux'
import { FETCH_COUNTRIES } from './actions'

const initalState = {
  name: '',
  countryList: [],
};

const countries = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, countryList: action.payload.data }
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  countries,
});

export default rootReducers;
