import React from 'react';
import BSString from '@cemderin/battlescribe-to-json/dist/src/BSString';

const UIHeader: React.FC = (props: any) => {
    console.log(props.factions);
    const loadData = () => {
        // fetch data from github: https://api.github.com/repos/BSData/wh40k-killteam/contents
        fetch('https://api.github.com/repos/BSData/wh40k-killteam/contents').then((result: any) => {
            return result.json();
        }).then((result: any) => {
            const factions = result.filter((item: any) => {
                let nameSegments = item.name.split('.');
                let suffix = nameSegments[nameSegments.length - 1];
                if (suffix === 'cat') return true;
                return false;
            });

            const promises = factions.map((faction: any) => {
                return fetch(faction.download_url).then((result: any) => {
                    return result.text();
                }).then((result: any) => {
                    return faction.download_url_response = result;
                });
            });

            Promise.all(promises).then((result: any) => {

                const modelPromises = factions.map((faction: any) => {
                    const parser = new BSString(faction.download_url_response);
                    return parser.load().then(() => {
                        try {
                            const models = parser.extractModels();
                            return faction.models = models;
                        } catch(e) {
                            return faction
                        } 
                    }); 
                });

                Promise.all(modelPromises).then((result: any) => {
                    console.log('factions', factions);
                    props.setFactions(factions);
                })
            });
        })
    }

    const reset = () => {
        props.setFactions([]);
    }

    return <header>
        <h1>Battle Calculator</h1>

        {props.factions.length <= 0 && (
            <button onClick={loadData}>Load data</button>
        )}

        {props.factions.length > 0 && (
            <button onClick={reset}>Reset</button>
        )}
    </header>
}

export default UIHeader;