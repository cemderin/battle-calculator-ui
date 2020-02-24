import BSString from "@cemderin/battlescribe-to-json/dist/src/BSString";
import reduxStore from "../store/store";
import { setFactions } from "../store/actions";

export default function loadData() {
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
                        delete(faction.download_url_response);
                        return faction.models = models;
                    } catch (e) {
                        return faction
                    }
                });
            });

            return Promise.all(modelPromises).then((result: any) => {
                reduxStore.dispatch(setFactions(factions));
            })
        });
    })
}