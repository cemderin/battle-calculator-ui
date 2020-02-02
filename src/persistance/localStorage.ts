const defaultState = {
    factions: []
}

const getInitialState = function () {
    const data: string | null  = localStorage.getItem('bcui-data');
    let jsonData;
    if(data) jsonData = JSON.parse(data);
    if(jsonData) return jsonData;

    return defaultState;
}

const saveState = function(state: any) {
    localStorage.setItem('bcui-data', JSON.stringify(state)); 
}

export default {
    defaultState,
    getInitialState,
    saveState
};