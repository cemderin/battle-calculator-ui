import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../../styles';

const UITable = styled.table`
font-size: ${dimensions.default/1.25}em;
    tr {
    }

    td, th {
        padding: ${dimensions.default}em;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    th {
        text-align: left;
        font-weight: bold;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
`;

const StyledTr = styled.tr`
    &:hover {
        background-color: rgba(255, 255, 255, 0.02);
    }
`

const UITableRow: React.FC = (props: any) => {
    return <StyledTr {...props}>
        {props.children}
    </StyledTr>
}

const StyledTd = styled.td`
    ${(props: any) => {
        if(props.right) {
            return `
                text-align: right;
            `
        }
        return '';
    }}
`

type UITableCellProps = {
    right?: boolean
}

const UITableCell: React.FC<UITableCellProps> = (props: any) => {
    return <StyledTd {...props}>
        {props.children}
    </StyledTd>
}

export {
    UITable as default,
    UITableRow,
    UITableCell
}