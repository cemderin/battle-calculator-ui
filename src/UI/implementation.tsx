import React from 'react';
import { Base } from '@cemderin/react-base-element';
import UIHeader from './Header';

type UIProps = {
    body?: any
}

const UI: React.FC<UIProps> = (props: any) => {
    return <React.Fragment>
        <Base>
            <UIHeader />

            {props.body && props.body}
        </Base>
    </React.Fragment>
}

export default UI;