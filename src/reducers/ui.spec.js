import ui from './ui'
import * as types from '../constants/ActionTypes'

describe('ui reducer', () => {
    it('should handle initial state', () => {
        expect(
            ui(undefined, {})
        ).toEqual({
                noteEditActive: false,
        })
    })

    it('should handle SHOW_NOTE_EDIT', () => {
        expect(
            ui({}, {
                type: types.SHOW_NOTE_EDIT,
            })
        ).toEqual({
            noteEditActive: true,
        })
    })

    it('should handle HIDE_NOTE_EDIT', () => {
        expect(
            ui({}, {
                type: types.HIDE_NOTE_EDIT,
            })
        ).toEqual({
            noteEditActive: false,
        })
    })
})
