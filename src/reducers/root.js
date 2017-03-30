import { combineReducers } from 'redux'
import ui from './ui'
import notes from './notes'

const rootReducer = combineReducers({
    notes,
    ui,
})

export default rootReducer