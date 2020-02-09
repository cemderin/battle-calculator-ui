import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../../../../styles';

const StyledInput = styled.input`
    border: none;
    margin: none;
    padding: none;
    line-height: inherit;
    font-family: inherit;
    font-size: inherit;
    background: transparent;
    border: none;
    color: inherit;
    padding: ${dimensions.default/2.5}em;
    background-color: rgba(255, 255, 255, 0.1);

    &:focus {
        outline: none;
    }
`;

type UIFormInputProps = {
    defaultValue?: string,
    label?: string,
    onChange?: Function,
    onBlur?: Function
}

const UIFormInput: React.FC<UIFormInputProps> = (props: any) => {
    return <label>
        {props.label && props.label}
        <StyledInput {...props} />
    </label>
}

export default UIFormInput;