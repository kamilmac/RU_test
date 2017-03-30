import { ADD_NOTE } from '../constants/actionTypes'

const initialState = [
    {
        text: 'Bye World',
    },
]

export default function notes(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return [
                {
                    text: action.text,
                },
                ...state,
            ]
        default:
            return state
    }
}