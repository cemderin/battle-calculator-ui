import React from 'react';
import { Switch, Route, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import DataEditor, { DataEditorModelFieldType } from '@cemderin/react-data-editor';
import styled from '@emotion/styled';
import Button from '../../Button';

const StyledDiv = styled.div`
    padding: 1em;
    table {
        width: 100%;

        margin: 0.5em 0;

        thead {}
        tbody {}

        tr {
            td, th {
                padding: 0.25em;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            th {
                text-align: left;
                font-weight: bold;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            }
        }
    }
`

const Model = [
    { key: "name", label: "name", type: DataEditorModelFieldType.String },
    { key: "models", label: "Models", type: DataEditorModelFieldType.Array, model: [
        { key: "name", type: DataEditorModelFieldType.String },
        { key: "weaponskill", type: DataEditorModelFieldType.String },
        { key: "strength", type: DataEditorModelFieldType.String },
        { key: "toughness", type: DataEditorModelFieldType.String },
        { key: "save", type: DataEditorModelFieldType.String },
        /*
        { key: "weapon", type: DataEditorModelFieldType.String, model: [
            {key: "name", type: DataEditorModelFieldType.String },
            {key: "strength", type: DataEditorModelFieldType.String },
            {key: "armorPiercing", type: DataEditorModelFieldType.String },
            {key: "damage", type: DataEditorModelFieldType.String }
        ] },
        */
    ] }
];

const UISCreenLists: React.FC = (props: any) => {
    let match = useRouteMatch();

    return <StyledDiv>
        <Switch>

            <Route path={`${match.path}/edit/:recordIndex`}>
                <FinalEditor {...props} />
            </Route>

            <Route path={`${match.path}/add`}>
                <FinalEditor {...props} addNewRecord={true} />
            </Route>

            <Route path={`${match.path}/`}>
                <FinalEditor {...props} />
            </Route>
        </Switch>
    </StyledDiv>
}

const FinalEditor: React.FC<any> = (props: any) => {
    const history = useHistory();
    const { recordIndex } = useParams();
    return <DataEditor
            {...props}
            data={props.lists}
            model={Model}

            addCallback={() => {
                history.push('/lists/add')
            }}

            editCallback={(editIndex: number) => {
                history.push('/lists/edit/' + editIndex);
            }}

            cancelCallback={() => {
                history.push('/lists');
            }}

            saveCallback={(what: any, where: number) => {
                const newLists = [...props.lists];
                if(where) {
                    newLists[where] = what; 
                } else {
                    newLists.push(what);
                }

                props.setLists(newLists);
                history.push('/lists');
            }}

            deleteCallback={(index: number) => {
                props.deleteList(index)
            }}

            buttonComponent={Button}

            editRecordIndex={recordIndex}
        />
}

export default UISCreenLists;  