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

        case Types.ADD_LIST: {
            let lists: Array<any> = [];
            if(Array.isArray(state.lists)) lists = [...state.lists];

            lists.push(action.payload.list);
            let newState = Object.assign({}, state, { lists });
            return newState;
        }

        case Types.DELETE_LIST: {
            let lists: Array<any> = [];
            if(Array.isArray(state.lists)) lists = [...state.lists];
            lists = lists.filter((list: any, index: number) => {
                if(index === action.payload.listIndex) return false;
                return true;
            });

            let newState = Object.assign({}, state, { lists });
            return newState;
        }

        case Types.UPDATE_LIST: {
            let lists: Array<any> = [];
            if(Array.isArray(state.lists)) lists = [...state.lists];

            lists.map((list: any, index: number) => {
                if(index === action.payload.listIndex) return action.payload.list;
                return list;
            });

            let newState = Object.assign({}, state, { lists });
            return newState;
        }

        case Types.SET_LISTS: {
            console.log(action);
            let newState = Object.assign({}, state, { lists: action.payload.lists });
            return newState;
        }
    }

    return state;
}

export default reducer;