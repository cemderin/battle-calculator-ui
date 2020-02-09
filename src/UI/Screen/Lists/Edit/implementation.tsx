import React from 'react';
import UIScreen from '../..';
import { withRouter, Link, Switch, Route } from 'react-router-dom';
import UIFormInput from '../../Form/Input';
import UITable, { UITableRow, UITableCell } from '../../../Table';
import Button from '../../../Button';
import { Model } from '@cemderin/battle-calculator';
import styled from 'styled-components';
import EditModel from './Model';

const StyledDl = styled.dl`
    dd, dt {
        display:inline-block;
    }

    dt {
        opacity: 0.5;
        margin-right: 0.25em;
    }

    dd {
        margin-right: 1em
    }
`;

const UIScreenListsEdit: React.FC = (props: any) => {
    const listIndex = props?.match?.params?.id;
    const list = listIndex ? props.lists[listIndex] : null;

    const setListName = (listName: string) => {
        if (listName === list.name) return;
        list.name = listName;
        props.updateList(listIndex, list);
    }

    const addModel = () => {
        let modelName = window.prompt('Model name');

        if (!modelName) return;
        let model = new Model();
        model.name = modelName;

        if (!list.models || !Array.isArray(list.models)) list.models = [];
        list.models.push(model);

        props.updateList(listIndex, list);
    }

    const removeModel = (modelIndex: number) => {
        if (!list.models || !Array.isArray(list.models)) list.models = [];
        list.models.splice(modelIndex, 1);
        props.updateList(listIndex, list);
    }

    return <UIScreen>

        <Switch>
            <Route path="/lists/edit/:id/model/:modelId">
                <EditModel />
            </Route>

            <Route path="/lists/edit/:id">
                {list && (
                    <React.Fragment>
                        <UIFormInput onBlur={(e: any) => setListName(e.target.value)} defaultValue={list.name} label="List name: " />
                        <br />

                        <UITable>
                            <thead>
                                <UITableRow>
                                    <th>
                                        Model
                            </th>
                                    <th>

                                    </th>
                                    <th>
                                        <Button onClick={addModel}>Add Model</Button>
                                    </th>
                                </UITableRow>
                            </thead>

                            <tbody>
                                {list.models && Array.isArray(list.models) && list.models.map((model: Model, index: number) => {
                                    console.log(model);
                                    return <UITableRow key={index}>
                                        <UITableCell>
                                            {model.name}
                                        </UITableCell>
                                        <UITableCell>
                                            <StyledDl>
                                                <dt>WS</dt>
                                                <dd>{model.weaponskill}</dd>

                                                <dt>T</dt>
                                                <dd>{model.toughness}</dd>

                                                <dt>S</dt>
                                                <dd>{model.strength}</dd>

                                                <dt>Sv</dt>
                                                <dd>{model.save}</dd>
                                            </StyledDl>
                                        </UITableCell>
                                        <UITableCell>
                                            <Link to={`/lists/edit/${listIndex}/model/${index}`}>
                                                <Button>Edit</Button>
                                            </Link>
                                            <Button onClick={() => {
                                                removeModel(index)
                                            }}>Delete</Button>
                                        </UITableCell>
                                    </UITableRow>
                                })}
                            </tbody>
                        </UITable>
                    </React.Fragment>
                )}
            </Route>
        </Switch>

        {!list && (
            <p>Invalid list index</p>
        )}
    </UIScreen>
}

export default withRouter(UIScreenListsEdit);