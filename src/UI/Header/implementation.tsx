import React from 'react';
import { BaseHeader } from '@cemderin/react-base-element';
import styled from 'styled-components';
import { dimensions } from '../../styles';
import Button from '../Button';
import resetStore from '../../logic/reset-store';
import loadData from '../../logic/load-data';
import version from '../../version.json';

const StyledUIHeader = styled(BaseHeader)`
    background-color: #222831;
    padding: ${dimensions.default}em;

    h1 {
        font-weight: bold;

        small {
            font-weight: normal;
            font-size: 0.75em;
            opacity: 0.75;
        } 
    }
`

const RightHeader = styled.div`
    flex-grow: 1;
    text-align: right;
`

const UIHeader: React.FC = (props: any) => {
    const reset = () => {
        resetStore();
    }

    const load = () => {
        loadData();
    }

    return <StyledUIHeader>
        <div>
            <h1>battle calculator <small>{version.version}</small></h1>
        </div>
        <RightHeader>
            {props.factions.length <= 0 && <Button onClick={load}>Load Data</Button>}
            {props.factions.length > 0 && <Button onClick={reset}>Reset</Button>}
        </RightHeader>
    </StyledUIHeader> 
}

export default UIHeader;