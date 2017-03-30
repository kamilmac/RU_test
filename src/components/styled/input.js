import styled from 'styled-components'

export default styled.input`
    display: 'inline-block';
    background: hsl(0, 0%, 20%);
    height: ${props => props.height || '50px'};
    outline: none;
    border: none;
    color: hsl(0, 0%, 80%);
    fontSize: 20px;
    padding: 10px;
    width: 100%;
    box-shadow: 0 -2px 4px rgba(0,0,0,.30);
`