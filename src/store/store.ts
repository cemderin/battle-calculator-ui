import { createStore, compose } from "redux";
import reducer from "./reducer";
import persistance from '../persistance/localStorage';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

function configureStore(initialState: any) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducer, initialState, composeEnhancers());
}

const reduxStore = configureStore(persistance.getInitialState());
reduxStore.subscribe(() => {
    persistance.saveState(reduxStore.getState());
});

export default reduxStore;