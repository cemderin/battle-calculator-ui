import React from 'react';
import UIScreen from '../..';
import { withRouter } from 'react-router-dom';
import UIFormInput from '../../Form/Input';

const UIScreenListsEdit: React.FC = (props: any) => {
    const listIndex = props?.match?.params?.id;
    const list = listIndex ? props.lists[listIndex] : null;

    const setListName = (listName: string) => {
        if (listName === list.name) return;
        list.name = listName;
        props.updateList(listIndex, list);
    }

    return <UIScreen>
        {list && (
            <React.Fragment>
                <UIFormInput onBlur={(e: any) => setListName(e.target.value)} defaultValue={list.name} label="List name: " />
            </React.Fragment>
        )}

        {!list && (
            <p>Invalid list index</p>
        )}
    </UIScreen>
}

export default withRouter(UIScreenListsEdit);