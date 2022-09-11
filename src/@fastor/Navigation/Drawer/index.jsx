import styled, { css } from 'styled-components'
import { Base, Border, Radius, Space } from '../../Common'

export const Drawer = styled.dialog`
    ${Base}
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    color: var(--dark70);
    border: none;
    @media(prefers-color-scheme: dark){
        color: var(--snow20);
    }
    ${Space}
    ${Border}
    ${Radius}
    z-index: ${props => props.zx};

    &.active {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        transition: transform 300ms var(--easeInOut077);
    }

    &.inactive {
        opacity: 0;
        transform: translateX(-100%);
        transition: transform 300ms ease-out;
    }

    &[open] {
        transform: translate(0, 0);
        visibility: visible;
        opacity: 1;
    }
`