import React, { useState } from 'react';
import Screen from '../'
import resetStore from '../../../logic/reset-store';
import loadData from '../../../logic/load-data';
import Button from '../../Button';
import persistance from '../../../persistance/localStorage';
import DataEditor, { DataEditorModelFieldType, DataEditorModelField } from '@cemderin/react-data-editor';
import styled from '@emotion/styled';

const weaponModel: Array<DataEditorModelField> = [
    { key: "name", type: DataEditorModelFieldType.String },
    { key: "strength", type: DataEditorModelFieldType.String },
    { key: "armorPiercing", type: DataEditorModelFieldType.String },
    { key: "damage", type: DataEditorModelFieldType.String },
];

const modelModel: Array<DataEditorModelField> = [
    { key: "name", type: DataEditorModelFieldType.String },
    { key: "weaponskill", type: DataEditorModelFieldType.String },
    { key: "toghness", type: DataEditorModelFieldType.String },
    { key: "strength", type: DataEditorModelFieldType.String },
    { key: "save", type: DataEditorModelFieldType.String },
    { key: "weapon", type: DataEditorModelFieldType.Object, model: weaponModel },
];

const factionModel: Array<DataEditorModelField> = [
    { key: "name", type: DataEditorModelFieldType.String },
    { key: "models", type: DataEditorModelFieldType.Array, model: modelModel }
];

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

const ScreenManageData: React.FC = (props: any) => {
    const [editFactionIndex, setEditFactionIndex] = useState<null | number>(null);
    const [addRecord, setAddRecord] = useState(false);

    return <Screen>
        <div>
            <Button onClick={resetStore}>Reset </Button>
            <Button onClick={loadData}>Load Data</Button>
            <Button onClick={() => {
                persistance.clearCache();
                window.location.reload();
            }}>Clear cache &amp; reload</Button>
        </div>

        {props.factions && props.factions.length > 0 && (
            <StyledDiv>
                <DataEditor
                    data={props.factions}
                    model={factionModel}
                    buttonComponent={Button}
                    editRecordIndex={editFactionIndex}
                    addNewRecord={addRecord}

                    addCallback={() => {
                        setAddRecord(true);
                    }}

                    editCallback={(editIndex: number) => {
                        setEditFactionIndex(editIndex);
                    }}

                    cancelCallback={() => {
                        setEditFactionIndex(null);
                        setAddRecord(false);
                    }}

                    saveCallback={(saveRecord: any, atIndex: number) => {
                        const wc = [...props.factions];

                        if (atIndex === null) {
                            wc.push(saveRecord);
                        } else {
                            wc[atIndex] = saveRecord;
                        }

                        props.setFactions(wc);
                        setEditFactionIndex(null);
                        setAddRecord(false);
                    }}

                    deleteCallback={(deleteAtIndex: number) => {
                        const wc = [...props.factions].filter((item: any, index: number) => {
                            if (!item) return false;
                            if (index === deleteAtIndex) return false;

                            return true;
                        });

                        props.setFactions(wc);
                        setEditFactionIndex(null);
                        setAddRecord(false);
                    }}
                />
            </StyledDiv>
        )}

    </Screen>
}

export default ScreenManageData;