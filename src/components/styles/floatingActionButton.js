import styled from 'styled-components'

export default styled.button`
    position: absolute;
    background: blue;
    width: 70px;
    height: 70px;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: 0;

    &:hover {
        background: white;
    }
`