import notes from './notes'
import * as types from '../constants/actionTypes'

describe('notes reducer', () => {
    it('should handle initial state', () => {
        expect(
            notes(undefined, {})
        ).toEqual([
            {
                text: 'Note #3',
            },
            {
                text: 'Note #2',
            },
            {
                text: 'Note #1',
            },
        ])
    })

    it('should handle ADD_NOTE', () => {
        expect(
            notes([], {
                type: types.ADD_NOTE,
                text: 'Testing'
            })
        ).toEqual([
            {
                text: 'Testing',
            }
        ])

        expect(
            notes([], {
                type: types.ADD_NOTE,
                text: 'Foo'
            })
        ).toEqual([
            {
                text: 'Foo',
            }
        ])
    })

})