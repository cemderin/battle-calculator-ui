import React from 'react';
import UISCreenListsOverview from './Overview';
import { withRouter, Switch, Route } from 'react-router-dom';
import UIScreenListsEdit from './Edit';

const UISCreenLists: React.FC = (props: any) => {
    return <React.Fragment>
        <Switch>

            <Route exact path="/lists/edit/:id">
                <UIScreenListsEdit />
            </Route>

            <Route exact path="/lists">
                <UISCreenListsOverview />
            </Route>
        </Switch>
    </React.Fragment>
}

export default withRouter(UISCreenLists);