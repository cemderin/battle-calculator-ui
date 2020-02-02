import React, { useState } from 'react';
import BSString from '@cemderin/battlescribe-to-json/dist/src/BSString';
import { Model, Phase } from '@cemderin/battle-calculator';

const App: React.FC = () => {
  const [attackers, setAttackers] = useState<Model[]>([]);
  const [defenders, setDefenders] = useState<Model[]>([]);

  const fileChangeHandler = (files: any, areAttackers: boolean = true) => {
    for (let file of files) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        const BS = new BSString(event.target.result);
        BS.load().then(() => {
          const models = BS.extractModels();
          if (areAttackers) setAttackers(models);
          if (!areAttackers) setDefenders(models);
        });
      }

      reader.readAsText(file);
    }
  }

  let results: Array<any> = [];
  for(let attackingModel of attackers) {
    for(let defendingModel of defenders) {
      const phase = new Phase();
      phase.attacker = attackingModel;
      phase.defender = defendingModel;

      results.push({
        attacker: attackingModel,
        defender: defendingModel,
        wounds: phase.handle()
      });
    }
  }

  console.log(results);

  return (
    <div>
      <input type="file" onChange={(e) => {
        fileChangeHandler(e.target.files)
      }} />

      <input type="file" onChange={(e) => {
        fileChangeHandler(e.target.files, false)
      }} />

      {results && (
        <table>
          <thead>
            <tr>
              <th>Attacker</th>
              <th>Defender</th>
              <th>Wounds</th>
            </tr>
          </thead>
          <tbody>
            {results.sort((itemA: any, itemB: any) => {
              if(itemA.wounds > itemB.wounds) return -1;
              if(itemA.wounds < itemB.wounds) return 1;
              return 0;
            }).map((result: any, index: number) => {
              return <tr key={index}>
                <td>
                  {result.attacker.name}
                </td>

                <td>
                  {result.defender.name}
                </td>

                <td>
                  {result.wounds}
                </td>
              </tr>
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
