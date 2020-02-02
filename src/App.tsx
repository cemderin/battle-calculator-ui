import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import UI from './UI';

 // app state
import configureStore from "./store/store";
import persistance from './persistance/localStorage';
const reduxStore = configureStore(persistance.getInitialState());
reduxStore.subscribe(() => {
    persistance.saveState(reduxStore.getState());
});

// app component
const App: React.FC = () => {

  return (
    <ReduxProvider store={reduxStore}>
      <UI />
    </ReduxProvider>
  );
}

export default App;
