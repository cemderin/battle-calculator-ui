import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import UI from './UI';
import reduxStore from './store/store';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScreenManageData from './UI/Screen/ManageData';

const App: React.FC = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/manage-data">
            <UI body={(<ScreenManageData />)} />
          </Route>
          <Route path="/">
            <UI />
          </Route>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
