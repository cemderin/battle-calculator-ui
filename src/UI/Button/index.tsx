import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../../styles';

const StyledButton = styled.button`
    transition: all 0.2s;
    border: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    margin:0;

    padding: ${dimensions.default/4}em ${dimensions.default/2}em;
    margin: 0 ${dimensions.default/2}em;
    background-color: #00adb5;
    margin-top: -${dimensions.default}em;
    margin-bottom: -${dimensions.default}em;
    color: #222831;
    cursor: pointer;
    border: 1px solid transparent;

    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(0.975);
    }

    &:hover {
        color: #00adb5;
        background-color: #222831;
        border: 1px solid #00adb5;
    }
`
type Props = {
    onClick?: any
}

const Button: React.FC<Props> = (props: Props) => {
    return <StyledButton {...props} />
}

export default Button;