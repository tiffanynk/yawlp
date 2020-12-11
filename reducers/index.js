import { combineReducers } from 'redux';

const restaurants = (state=[], action) => {
    switch(action.type){
        case "SET_RESTAURANTS":
            //restaurants is the payload
            return action.restaurants
        default:
            return state

    }
}
export default combineReducers({
    restaurants,
})