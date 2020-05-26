import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducer';
import cashReducer from './cashReducer';

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    cash: cashReducer
})

export default rootReducer;