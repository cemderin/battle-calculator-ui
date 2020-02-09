import React from 'react';
import UISCreenListsOverview from './Overview';
import { withRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import UIScreenListsEdit from './Edit';

const UISCreenLists: React.FC = (props: any) => {
    return <BrowserRouter>
        <Switch>

            <Route exact path="/lists/edit/:id">
                <UIScreenListsEdit />
            </Route>

            <Route exact path="/lists">
                <UISCreenListsOverview />
            </Route>
        </Switch>
    </BrowserRouter>
}

export default withRouter(UISCreenLists);