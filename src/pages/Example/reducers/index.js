import { combineReducers } from 'redux'
import rooms from './rooms'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    rooms,
    visibilityFilter
})
