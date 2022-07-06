import { css } from 'styled-components'

export const Input = css`
    width: ${props => props.wt || "100%" };
    height: ${props => props.ht};
    min-height: ${props => props.mh};
    display: ${props => props.view || "flex"};
    position: ${props => props.position};
    outline: ${props => props.outline || 'none'};

    ${(props) => {
        switch(props.inputBorder){
            case 'contained':
                return css`
                    border: var(--border);
                    @media(prefers-color-scheme: dark){
                        border: var(--border-dark);
                    }
                `

            case 'base':
                return css`
                    border-bottom: var(--border);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--border-dark);
                    }
                `

            default:
                return css`
                    border: ${props => props.border || 'none'};
                `
        }
    }}

    color: ${props => props.color || 'var(--dark70)'};
    background: ${props => props.paint};
    @media(prefers-color-scheme: dark){
        color: ${props => props.colord || 'var(--snow20)'};
        background: ${props => props.paintd};
    }

    &:focus {
        ${(props) => {
            switch(props.focus){
                case "contained":
                    return css`
                        border: 1px solid var(--primary);
                    `

                case "base":
                    return css`
                        border-bottom: 1px solid var(--primary);
                    `
            }
        }}
    }
`