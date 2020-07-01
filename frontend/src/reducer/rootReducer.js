import {combineReducers} from 'redux';
import cart from './cartReducer';
import userReducer from './userReducer'
const rootReducer = combineReducers({
    cart,userReducer
})

export default rootReducer