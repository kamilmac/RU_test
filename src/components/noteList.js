import React, { PropTypes } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    height: ${props => props.height || '100vh'};
    overflow: auto;
`

const StyledItem = styled.p`
    margin-top: 10px;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    background: ${props => props.bgColor || 'hsl(0, 0%, 85%)'};
    border-radius: 10px;
    max-width: 500px;
    font-size: 16px;
    color: ${props => props.textColor || 'hsl(0, 0%, 30%)'};
`

const noteList = ({ notes = [], textColor, bgColor, height }) =>
    <StyledContainer height={height}>
        {
            notes.map((note, index) =>
                <StyledItem
                    key={index}
                    textColor={textColor}
                    bgColor={bgColor}
                >
                    {note.text}
                </StyledItem>
            )
        }
    </StyledContainer>

noteList.propTypes = {
    notes: PropTypes.array,
};

export default noteList
