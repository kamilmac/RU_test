import * as types from '../constants/ActionTypes'

export const addNote = text => ({ type: types.ADD_NOTE, text })
export const showNoteEdit = () => ({ type: types.SHOW_NOTE_EDIT })
export const hideNoteEdit = () => ({ type: types.HIDE_NOTE_EDIT })