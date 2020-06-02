import { combineReducers } from 'redux'
import rooms from './rooms';
import room from './room';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    rooms,
    room,
    visibilityFilter
})
