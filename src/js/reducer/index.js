import {combineReducers} from 'redux'
import formation_reducer from './formation_reducer'
import experiences_reducer from './experiences_reducer'
import competences_reducer from './competences_reducer'

const rootReducer=combineReducers({
    formation_reducer,
    experiences_reducer,
    competences_reducer
    
})
export default rootReducer