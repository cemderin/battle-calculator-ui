import React from 'react';
import Screen from '../'
import resetStore from '../../../logic/reset-store';
import loadData from '../../../logic/load-data';
import Button from '../../Button';
import persistance from '../../../persistance/localStorage';

const ScreenManageData: React.FC = () => {
    return <Screen>
        <div>
            <Button onClick={resetStore}>Reset </Button>
            <Button onClick={loadData}>Load Data</Button>
            <Button onClick={() => {
                persistance.clearCache();
                window.location.reload();
            }}>Clear cache &amp; reload</Button>
        </div>
    </Screen>
}

export default ScreenManageData;