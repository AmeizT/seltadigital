import styled, { css } from "styled-components"

export const Hamburger = styled.span`
    width: 36px;
    height: 1px;
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
        top: 5px;
    }

    &::before {
        top: -5px;
    }
`