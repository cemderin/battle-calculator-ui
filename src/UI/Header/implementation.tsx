import React from 'react';

const UIHeader: React.FC = (props: any) => {
    const loadData = () => {
        // fetch data from github: https://api.github.com/repos/BSData/wh40k-killteam/contents
        fetch('https://api.github.com/repos/BSData/wh40k-killteam/contents').then((result: any) => {
            return result.json();
        }).then((result: any) => {
            const factions = result.filter((item: any) => {
                let nameSegments = item.name.split('.');
                let suffix = nameSegments[nameSegments.length -1];
                if(suffix === 'cat') return true;
                return false;
            });

            console.log('factions', factions);
            props.setFactions(factions);
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

        <button onClick={reset}>Reset</button>
    </header>
}

export default UIHeader;