import styled from 'styled-components';
import { dimensions } from '../../styles';

const UICopy = styled.div`
    line-height: 1.25em;
    
    h1, h2, h3, h4, h5 {
        font-weight: bold;
    }

    h1 {
        font-size: 2em;
        line-height: 1em;
    }

    h1, h2, h3, h4, h5, p, ul, ol {
        margin-bottom: ${dimensions.default}rem;
    }

    a {
        color: inherit;
    }


`;

export default UICopy;
