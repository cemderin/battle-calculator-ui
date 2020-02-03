import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import UIHeader from './Header';
import Phase from '@cemderin/battle-calculator';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
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
    return <React.Fragment>
        <GlobalStyle />
        <UIHeader />

        {props.factions.length > 0 && (
            <React.Fragment>


                <table>
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
                        <React.Fragment>
                            {calc().sort((resultA: any, resultB: any) => {
                                if(resultA.result < resultB.result) return 1;
                                if(resultA.result > resultB.result) return -1;
                                return 0;
                            }).map((result: any) => {
                                return <tr>
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
                        </React.Fragment>
                    )}

                </table>
            </React.Fragment>
        )}
    </React.Fragment>
}

export default UI;