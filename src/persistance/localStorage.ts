const defaultState = {
    factions: [],
    attacker: null,
    defender: null,
    results: null
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

const clearCache = function() {
    localStorage.removeItem('bcui-data'); 
}

export default {
    defaultState,
    getInitialState,
    saveState,
    clearCache
};