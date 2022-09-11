import styled, {css} from 'styled-components'
import { Border, Radius, Space, Typography } from '../../Common'

export const NavLink = styled.a `
    display: ${props => props.view};
    ${Typography}
    ${Space}
    ${Radius}
    ${Border}
    transition: ${props => props.change || "all 200ms ease-in-out"};

    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }

    &:hover {
        color: var(--primary);
        padding-bottom: var(--sz20);
        border-bottom: 2px dotted var(--primary);
        transition: border 80ms, color 80ms, ease-in;
    }

    &.active {
        padding-bottom: var(--sz20);
        scale: 1;
        border-bottom: 2px dotted var(--primary);
        color: var(--primary);
        transition: all 200ms ease-in;
    }
`