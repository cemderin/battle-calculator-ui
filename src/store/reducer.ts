import persistance from '../persistance/localStorage';
import Types from './actions';

const defaultState = persistance.defaultState;
const reducer = (_state: any = defaultState, action: any) => {
    let state = _state;

    switch(action.type) {
        case Types.SET_FACTIONS: {
            let newState = Object.assign({}, state, { factions: action.payload.factions });
            return newState;
        }
    }

    return state;
}

export default reducer;