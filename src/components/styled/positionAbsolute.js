import styled from 'styled-components'

export default styled.div`
    position: absolute;
    top: ${props => props.center ? '50%' : (props.top || null)};
    left: ${props => props.center ? '50%' : (props.left || null)};
    right: ${props => props.right || null};
    bottom: ${props => props.bottom || null};
    ${props => props.center ? 'transform: translate(-50%, -50%);' : null};
`
