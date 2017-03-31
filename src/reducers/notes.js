import { ADD_NOTE } from '../constants/ActionTypes'

const initialState = [
    {
        text: 'Note #3',
    },
    {
        text: 'Note #2',
    },
    {
        text: 'Note #1',
    },
]

export default (state = initialState, action) => {
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
