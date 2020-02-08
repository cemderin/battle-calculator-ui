import React from 'react';
import { BaseBody } from '@cemderin/react-base-element';
import styled from 'styled-components';
import { dimensions } from '../../styles';

const StyledBaseBody = styled(BaseBody)`
  padding: ${dimensions.default}em;
`

const UIScreen: React.FC = (props: any) => {
    return <StyledBaseBody {...props} />
}

export default UIScreen;