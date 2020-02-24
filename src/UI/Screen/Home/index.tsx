import React, { useEffect, useState } from 'react';
import UIScreen from '..';
import ReactMarkdown from 'react-markdown';
import UICopy from '../../Copy';
import { withRouter } from 'react-router-dom';

const UIScreenHome: React.FC = () => {
    const [content, setContent] = useState('');
    const [changelog, setChangelog] = useState('');

    useEffect(() => {
        fetch('./docs/HOME.md').then((response: any) => {
            if (response.ok) return response.text();
            throw new Error('Failed loading markdown file');
        }).then((text) => {
            setContent(text);
        });

        fetch('./docs/CHANGELOG.md').then((response: any) => {
            if (response.ok) return response.text();
            throw new Error('Failed loading markdown file');
        }).then((text) => {
            setChangelog(text);
        });
    });

    return <UIScreen>
        <UICopy>
            <ReactMarkdown source={content} />
            <br /><br />
            <ReactMarkdown source={changelog} />
        </UICopy>
    </UIScreen>
}

export default withRouter(UIScreenHome);