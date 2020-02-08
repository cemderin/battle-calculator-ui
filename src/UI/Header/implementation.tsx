import React from 'react';
import { BaseHeader } from '@cemderin/react-base-element';
import styled from 'styled-components';
import { dimensions } from '../../styles';
import packageJson from '../../../package.json';
import { Menu, Item } from '@cemderin/react-collapsable-menu';
import { Link, withRouter } from 'react-router-dom';

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

const StyledItem = styled(Item)`
    margin:0 0.5em;
    padding:0;

    ${props => (props: any) => {
        if (props.active) return `
            font-weight: bold;
            text-decoration: none;
        `;
    }}

    a {
        color: inherit;
        text-decoration: none;
    }
`

const StyledMenu = styled(Menu)`
    margin-left: 1em;
    font-size: 0.75em;
    line-height: 1.25em;
`

const StyledH1 = styled.h1`
    a {
        color: inherit;
        text-decoration: none;
    }
    


`

const UIHeader: React.FC = (props: any) => {

    const menuItems = [
        {
            label: "Home",
            route: "/",
        },
        {
            label: "Results",
            route: "/results"
        },
        {
            label: "Manage Data",
            route: "/manage-data"
        }
    ];

    return <StyledUIHeader>
        <div>
            <StyledH1><Link to="/">battle calculator <small>{packageJson.version}</small></Link></StyledH1>
        </div>
        <RightHeader>
            <StyledMenu>
                {menuItems.map((menuItem: any, index: number) => {
                    return <StyledItem active={props.location.pathname === menuItem.route} key={index}><Link to={menuItem.route}>{menuItem.label}</Link></StyledItem>
                })}
            </StyledMenu>
        </RightHeader>
    </StyledUIHeader>
}

export default withRouter(UIHeader);