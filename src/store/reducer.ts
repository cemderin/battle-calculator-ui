import persistance from '../persistance/localStorage';
import Types from './actions';
import calculateBattles from '../logic/calculate-battles';
// import calculateBattles from '../logic/calculate-battles';

const defaultState = persistance.defaultState;
const reducer = (_state: any = defaultState, action: any) => {
    let state = _state;

    switch(action.type) {
        case Types.SET_FACTIONS: {
            let newState = Object.assign({}, state, { factions: action.payload.factions });
            return newState;
        }

        case Types.SET_ATTACKER: {
            let results = state.results;
            if(state.defender >= 0) results = calculateBattles(action.payload.attacker, state.defender, state.factions);
            let newState = Object.assign({}, state, { attacker: action.payload.attacker, results: results });
            return newState;
        }

        case Types.SET_DEFENDER: {
            let results = state.results;
            if(state.attacker >= 0) results = calculateBattles(state.attacker, action.payload.defender, state.factions);
            let newState = Object.assign({}, state, { defender: action.payload.defender, results: results });
            return newState;
        }

        case Types.SET_RESULTS: {
            let newState = Object.assign({}, state, { results: action.payload.results });
            return newState;
        }
    }

    return state;
}

export default reducer;