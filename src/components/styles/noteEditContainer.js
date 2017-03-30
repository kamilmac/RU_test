import styled from 'styled-components'

export default styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
    position: absolute;
    background: white;
    width: 350px;
    height: 500px;
    right: 30px;
    bottom: 120px;
`