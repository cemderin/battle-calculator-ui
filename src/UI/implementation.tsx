import React from 'react';
import { Base, BaseBody } from '@cemderin/react-base-element';
import { Reset } from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components';
import UIHeader from './Header';
import { dimensions } from '../styles';

const GlobalStyle = createGlobalStyle` 
  body {
    // https://colorhunt.co/palette/2763
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    background-color: #393e46;
    color: #eeeeee;
  }
`

const StyledUI = styled(Base)`
`

const StyledBaseBody = styled(BaseBody)`
  padding: ${dimensions.default}em;
`

const UI: React.FC = (props: any) => {
    return <React.Fragment>
        <Reset />
        <GlobalStyle />

        <StyledUI>
            <UIHeader />
            <StyledBaseBody>
                {props.factions.length > 0 && (
                    <React.Fragment>
                        <select defaultValue={props.attacker} onChange={(e) => {
                            props.setAttacker(e.target.value);
                        }}>
                            <option value="-1">Select</option>
                            {props.factions.map((faction: any, index: number) => {
                                return <option key={index} value={index}>
                                    {faction.name}
                                </option>
                            })}
                        </select>

                        <select defaultValue={props.defender} onChange={(e) => {
                            props.setDefender(e.target.value);
                        }}>
                            <option value="-1">Select</option>
                            {props.factions.map((faction: any, index: number) => {
                                return <option key={index} value={index}>
                                    {faction.name}
                                </option>
                            })}
                        </select>

                        {props.results && props.results.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Attacker</th>
                                        <th>Defender</th>
                                        <th>Wounds caused</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.results.sort((a: any, b: any) => {
                                        if (a.result > b.result) return -1;
                                        if (a.result < b.result) return 1;
                                        return 0;
                                    }).map((result: any, index: number) => {
                                        return <tr key={index}>
                                            <td>{result.attacker}</td>
                                            <td>{result.defender}</td>
                                            <td>{result.result}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        )}
                    </React.Fragment>
                )}
            </StyledBaseBody>
        </StyledUI>
    </React.Fragment>
}

export default UI;