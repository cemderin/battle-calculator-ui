const Types = {
    SET_FACTIONS: 'SET_FACTIONS',
    SET_ATTACKER: 'SET_ATTACKER',
    SET_DEFENDER: 'SET_DEFENDER',
    SET_RESULTS: 'SET_RESULTS'
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

export {
    Types as default,
    setFactions,
    setAttacker,
    setDefender,
    setResults
}