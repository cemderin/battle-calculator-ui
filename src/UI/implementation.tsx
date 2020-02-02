import React from 'react';
import { createGlobalStyle } from 'styled-components'
import UIHeader from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const UI: React.FC = (props: any) => {
    return <React.Fragment>
        <GlobalStyle />

        <UIHeader />

        {props.factions.length > 0 && (
            <React.Fragment>
                <select>
                    {props.factions.map((faction: any, index: number) => {
                        return <option key={index}>{faction.name}</option>
                    })}
                </select>

                <select>
                    {props.factions.map((faction: any, index: number) => {
                        return <option key={index}>{faction.name}</option>
                    })}
                </select>
            </React.Fragment>
        )}
    </React.Fragment>
}

export default UI;