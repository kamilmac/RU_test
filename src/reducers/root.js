import { combineReducers } from 'redux'
import ui from './ui'
import notes from './notes'

export default combineReducers({
    notes,
    ui,
})
