import React, { useState } from 'react';
import BSString from '@cemderin/battlescribe-to-json/dist/src/BSString';
import { Model } from '@cemderin/battle-calculator';

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

  return (
    <div>
      <input type="file" onChange={(e) => {
        fileChangeHandler(e.target.files)
      }} />

      <input type="file" onChange={(e) => {
        fileChangeHandler(e.target.files, false)
      }} />

      <h3>Attackers</h3>
      {attackers.map(_a => {
        return <div>
          {_a.name}
        </div>
      })}

      <h3>Defenders</h3>
      {defenders.map(_a => {
        return <div>
          {_a.name}
        </div>
      })}
    </div>
  );
}

export default App;
