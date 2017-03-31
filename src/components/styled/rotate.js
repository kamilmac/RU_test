import styled, { keyframes } from 'styled-components'

const rotateIn = keyframes`
    0% {
        opacity: 0;
        transform: rotate(-135deg);
    }

    100% {
        opacity: 1;
        transform: rotate(0deg);
    }
`

const rotateOut = keyframes`
    0% {
        opacity: 1;
        transform: rotate(0deg);
    }

    100% {
        opacity: 0;
        transform: rotate(-135deg);
    }
`

export default styled.div`
    opacity: ${props => props.rotate === 'in' ? 1 : 0};
    animation: ${props => props.rotate === 'in' ? rotateIn : rotateOut} ${props => props.time/1000 || 0.3}s ease-out;
`
