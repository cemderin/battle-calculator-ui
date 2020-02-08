import React from 'react';
import { Base } from '@cemderin/react-base-element';
import styled from 'styled-components';
import UIHeader from './Header';
import UIScreen from './Screen';

// https://colorhunt.co/palette/2763

const StyledUI = styled(Base)`
`

type UIProps = {
    body?: any
}

const UI: React.FC<UIProps> = (props: any) => {
    return <React.Fragment>
        <StyledUI>
            <UIHeader />

            {props.body && props.body}

            {!props.body && props.factions.length > 0 && (
                <UIScreen>
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
                </UIScreen>
            )}

        </StyledUI>
    </React.Fragment>
}

export default UI;