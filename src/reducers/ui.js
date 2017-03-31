import { SHOW_NOTE_EDIT, HIDE_NOTE_EDIT } from '../constants/ActionTypes'

const initialState = {
    noteEditActive: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTE_EDIT:
            return { ...state, noteEditActive: true }
        case HIDE_NOTE_EDIT:
            return { ...state, noteEditActive: false }
        default:
            return state
    }
}
