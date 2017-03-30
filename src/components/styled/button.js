import styled from 'styled-components'

export default styled.button`
    outline: none;
    border: none;
    font-size: ${props => props.fontSize || 30};
    background: ${props => props.bgColor || 'none'};
    color: ${props => {
        if (props.active) {
            return props.activeColor
        } else {
            return props.color
        }
    }};
    height: ${props => props.height || 50}px;
    width: ${props => props.width || 50}px;
    cursor: pointer;
`
