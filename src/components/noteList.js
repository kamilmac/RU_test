import React, { PropTypes } from 'react'

const noteList = ({ notes = [] }) =>
    <div>
        {
            notes.map((note, index) => <h1 key={index}>{note.text}</h1>)
        }
    </div>

noteList.propTypes = {
    notes: PropTypes.array,
};

export default noteList
