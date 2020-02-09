import React from 'react';

type UIFormProps = {
    onSubmit?: Function
}

const UIForm: React.FC<UIFormProps> = (props: any) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(props.onSubmit) props.onSubmit(e);
    }

    return <form {...props} onSubmit={(e: any) => {
        handleSubmit(e);
    }} />
}

export default UIForm;
