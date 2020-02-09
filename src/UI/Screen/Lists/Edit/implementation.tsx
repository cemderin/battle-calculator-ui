import React from 'react';
import UIScreen from '../..';
import { withRouter } from 'react-router-dom';

const UIScreenListsEdit: React.FC = (props: any) => {
    const listIndex = props?.match?.params?.id;
    const list = listIndex ? props.lists[listIndex] : null;

    return <UIScreen>
        {list && (
            <h1>{list.name}</h1>
        )}

        {!list && (
            <p>Invalid list index</p>
        )}
    </UIScreen>
}

export default withRouter(UIScreenListsEdit);