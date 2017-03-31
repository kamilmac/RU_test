import React, { PropTypes } from 'react'
import PositionAbsolute from './styled/PositionAbsolute'
import TransitionRotate from './styled/Rotate'
import TransitionZoom from './styled/Zoom'
import ChatIcon from 'react-icons/lib/md/chat-bubble'
import CloseIcon from 'react-icons/lib/md/close'
import styled from 'styled-components'

const StyledContainer = styled.button`
    position: absolute;
    background: hsl(0, 100%, 66%);
    width: 60px;
    height: 60px;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: 0;
    box-shadow: 0 5px 40px rgba(0,0,0,.16);

    &:hover {
        background: hsl(0, 100%, 56%);
    }
`

const StyledIcon = styled.span`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.size || 20}px;
    line-height: ${props => props.size || 20}px;
`

const Fab = ({active, onActivate, onDeactivate}) =>
    <StyledContainer onClick={() => active ? onDeactivate() : onActivate()}>
        <TransitionZoom zoom={active ? 'out' : 'in'}>
            <PositionAbsolute center>
                <StyledIcon>
                    <ChatIcon />
                </StyledIcon>
            </PositionAbsolute>
        </TransitionZoom>

        <TransitionRotate rotate={active ? 'in' : 'out'}>
            <PositionAbsolute center>
                <StyledIcon>
                    <CloseIcon />
                </StyledIcon>
            </PositionAbsolute>
        </TransitionRotate>
    </StyledContainer>

Fab.propTypes = {
    active: PropTypes.bool.isRequired,
    onActivate: PropTypes.func.isRequired,
    onDeactivate: PropTypes.func.isRequired,
}

export default Fab
