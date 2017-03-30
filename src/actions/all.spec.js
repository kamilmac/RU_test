import * as types from '../constants/ActionTypes'
import * as actions from './all'

describe('notes actions', () => {
    it('addNote should create ADD_NOTE action', () => {
        expect(actions.addNote('Hello')).toEqual({
            type: types.ADD_NOTE,
            text: 'Hello'
        })
    })

    it('showNoteEdit should create SHOW_NOTE_EDIT action', () => {
        expect(actions.showNoteEdit()).toEqual({
            type: types.SHOW_NOTE_EDIT,
        })
    })

    it('hideNoteEdit should create HIDE_NOTE_EDIT action', () => {
        expect(actions.hideNoteEdit()).toEqual({
            type: types.HIDE_NOTE_EDIT,
        })
    })
})