import React, { PropTypes } from 'react'
import styled from 'styled-components'

const StyledItem = styled.h2`
    margin-top: 5px;
    color: ${props => props.color || 'black'}
`

const noteList = ({ notes = [], textColor }) =>
    <div>
        {
            notes.map((note, index) =>
                <StyledItem
                    key={index}
                    textColor={textColor}
                >
                    {note.text}
                </StyledItem>
            )
        }
    </div>

noteList.propTypes = {
    notes: PropTypes.array,
};

export default noteList
