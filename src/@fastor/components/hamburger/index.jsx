import styled, { css } from "styled-components"

export const Hamburger = styled.span`
    width: 40px;
    height: 2px;
    display: block;
    top: 0;
    background: transparent;


    &::after,
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        background: var(--dark40); 
    }

    &::after {
        top: 6px;
    }

    &::before {
        top: -6px;
    }
`