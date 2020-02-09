import React from 'react';
import UIScreen from '../..';
import UITable, { UITableCell, UITableRow } from '../../../Table';
import Button from '../../../Button';
import { Link, withRouter } from 'react-router-dom';
import { Base, BaseBody } from '@cemderin/react-base-element';

const UISCreenListsOverview: React.FC = (props: any) => {

    const confirmDelete = (index: number) => {
        let name = props.lists[index].name;
        if (window.confirm(`Delete list ${name}?`)) props.deleteList(index);
    }

    const enterAddList = () => {
        let name = window.prompt('New list name');
        props.addList({
            name
        });

        props.history.push(`/lists/edit/${props.lists.length}`);
    }

    return <Base>
        <BaseBody>
            <UIScreen>
                <UITable>
                    <thead>
                        <tr>
                            <th>
                                List
                            </th>
                            <th>
                                <Button onClick={enterAddList}>Add List</Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lists && Array.isArray(props.lists) && props.lists.map((list: any, index: number) => {
                            return <UITableRow key={index}>
                                <td>{list.name}</td>
                                <UITableCell>
                                    <Link to={`/lists/edit/${index}`}>
                                        <Button>Edit</Button>
                                    </Link>
                                    <Button onClick={() => {
                                        return confirmDelete(index)
                                    }}>Delete</Button>
                                </UITableCell>
                            </UITableRow>
                        })}
                    </tbody>
                </UITable>
            </UIScreen>
        </BaseBody>
    </Base>
}

export default withRouter(UISCreenListsOverview);