import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import UIHeader from './Header';
import Phase from '@cemderin/battle-calculator';
import { Reset } from 'styled-reset'
import styled from 'styled-components';

const StyledUI = styled.div`
    // padding: 1em;
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`

const StyledTable = styled.table`
    td, th {
        padding: 0.25em;
    }
`

const UI: React.FC = (props: any) => {
    const [attackerIndex, setAttackerIndex] = useState(-1);
    const [defenderIndex, setDefenderIndex] = useState(-1);

    const calc = () => {
        let results: Array<any> = [];

        for(let attacker of props.factions[attackerIndex].models) {
            for(let defender of props.factions[defenderIndex].models) {
                const phase = new Phase();
                phase.attacker = attacker;
                phase.defender = defender;

                results.push({
                    attacker: attacker.name,
                    defender: defender.name,
                    result: phase.handle()
                });
            }
        }

        return results;
    };
    return <StyledUI>
        <Reset />
        <GlobalStyle />
        <UIHeader />

        {props.factions.length > 0 && (
            <React.Fragment>


                <StyledTable>
                    <thead>
                        <tr>
                            <th>
                                Attacker
                                <select onChange={(e: any) => {
                                    setAttackerIndex(e.target.value)
                                }}>
                                    <option value={-1}>Select</option>
                                    {props.factions.map((faction: any, index: number) => {
                                        return <option key={index} value={index}>{faction.name}</option>
                                    })}
                                </select>
                            </th>
                            <th>
                                Defender
                                <select onChange={(e: any) => {
                                    setDefenderIndex(e.target.value)
                                }}>
                                    <option value={-1}>Select</option>
                                    {props.factions.map((faction: any, index: number) => {
                                        return <option key={index} value={index}>{faction.name}</option>
                                    })}
                                </select>
                            </th>
                            <th>
                                Wounds caused
                            </th>
                        </tr>
                    </thead>

                    {attackerIndex >= 0 && defenderIndex >= 0 && (
                        <tbody>
                            {calc().sort((resultA: any, resultB: any) => {
                                if(resultA.result < resultB.result) return 1;
                                if(resultA.result > resultB.result) return -1;
                                return 0;
                            }).map((result: any, index: number) => {
                                return <tr key={index}>
                                    <td>
                                        {result.attacker}
                                    </td>
                                    <td>
                                        {result.defender}
                                    </td>
                                    <td>
                                        {result.result}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    )}

                </StyledTable>
            </React.Fragment>
        )}
    </StyledUI>
}

export default UI;