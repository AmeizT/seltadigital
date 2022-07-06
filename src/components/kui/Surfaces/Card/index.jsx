import styled, { css } from 'styled-components'
import { Alignment, Border, BoxLayout, Space, Radius } from "../../Common";

export const Card = styled.div.attrs(props => ({
    as: props.use,
}))`
    ${BoxLayout}
    ${Alignment}
    ${Space}
    ${Border}
    ${Radius}

    ${(props) => {
        switch(props.cursor){
            case "active":
                return css`
                cursor: pointer;
            `

            default:
                return css`
                   cursor: default; 
                `
        }
    }}
    
    ${(props) => {
        switch(props.variant){
            case "contained":
                return css`
                    background: var(--snow);
                    @media(prefers-color-scheme: dark){
                        background: var(--dark-500);
                    }
                `;
            
            case "outline":
                return css`
                    background: none;
                    @media(prefers-color-scheme: dark){
                        background: none;
                    }
                `;
        }
    }}

    & img {
        ${(props) => {
            switch(props.imageRad){
                case "top":
                    return css`
                        border-top-right-radius: var(--space-sm);
                        border-top-left-radius: var(--space-sm);
                    `
            }
        }}
    }
`