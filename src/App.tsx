import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import UI from './UI'; 
import reduxStore from './store/store';

const App: React.FC = () => {

  return (
    <ReduxProvider store={reduxStore}>
      <UI />
    </ReduxProvider>
  );
}

export default App;
