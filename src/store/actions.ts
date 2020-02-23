const Types = {
    SET_FACTIONS: 'SET_FACTIONS',
    SET_ATTACKER: 'SET_ATTACKER',
    SET_DEFENDER: 'SET_DEFENDER',
    SET_RESULTS: 'SET_RESULTS',
    ADD_LIST: 'ADD_LIST',
    DELETE_LIST: 'DELETE_LIST',
    UPDATE_LIST: 'UPDATE_LIST',
    SET_LISTS: 'SET_LISTS'
}

const setFactions = (factions: Array<any>) => ({
    type: Types.SET_FACTIONS,
    payload: {
        factions
    }
})

const setAttacker = (attacker: number) => ({
    type: Types.SET_ATTACKER,
    payload: {
        attacker
    }
})

const setDefender = (defender: number) => ({
    type: Types.SET_DEFENDER,
    payload: {
        defender
    }
})

const setResults = (results: Array<any>) => ({
    type: Types.SET_RESULTS,
    payload: {
        results
    }
})

const addList = (list: any) => ({
    type: Types.ADD_LIST,
    payload: {
        list
    }
})

const deleteList = (listIndex: number) => ({
    type: Types.DELETE_LIST,
    payload: {
        listIndex
    }
})

const updateList = (listIndex: number, list: any) => ({
    type: Types.UPDATE_LIST,
    payload: {
        listIndex,
        list
    }
})

const setLists = (lists: Array<any>) => ({
    type: Types.SET_LISTS,
    payload: {
        lists
    }
})

export {
    Types as default,
    setFactions,
    setAttacker,
    setDefender,
    setResults,
    addList,
    deleteList,
    updateList,
    setLists
}