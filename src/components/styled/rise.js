import styled, { keyframes } from 'styled-components'

const rise = keyframes`
    0% {
        transform: translateY(100px);
    }

    100% {
        transform: translateY(0px);
    }
`

const riseReverse = keyframes`
    0% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(100px);
    }
`

export default styled.div`
    animation: ${props => props.trigger ? rise : riseReverse} ${props => props.time/1000 || 0.3}s ease-out;
`
