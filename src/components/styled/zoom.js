import styled, { keyframes } from 'styled-components'

const zoomIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const zoomOut = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(0);
    }
`

export default styled.div`
    ${props => props.origin ? `transform-origin: ${props.origin}` : null};
    opacity: ${props => props.zoom === 'in' ? 1 : 0};
    animation: ${props => props.zoom === 'in' ? zoomIn : zoomOut} ${props => props.time/1000 || 0.2}s ease-out;
`