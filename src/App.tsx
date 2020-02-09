import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import UI from './UI';
import reduxStore from './store/store';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UIScreenManageData from './UI/Screen/ManageData';
import UIScreenResults from './UI/Screen/Results';
import UIScreenHome from './UI/Screen/Home';
import UISCreenLists from './UI/Screen/Lists';

const App: React.FC = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/manage-data">
            <UI body={(<UIScreenManageData />)} />
          </Route>
          <Route path="/lists">
            <UI body={(<UISCreenLists />)} />
          </Route>
          <Route path="/results">
            <UI body={(<UIScreenResults />)} />
          </Route>
          <Route path="/">
            <UI body={(<UIScreenHome />)} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
