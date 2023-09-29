import { createStore, combineReducers } from 'redux'
import CarReducers from './CarReducers'

const rootReducer = combineReducers({
    CarReducers
})

const store = createStore(rootReducer)
export default store