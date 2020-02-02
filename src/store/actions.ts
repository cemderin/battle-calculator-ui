const Types = {
    SET_FACTIONS: 'SET_FACTIONS'
}

const setFactions = (factions: Array<any>) => ({
    type: Types.SET_FACTIONS,
    payload: {
        factions
    }
})

export {
    Types as default,
    setFactions
}