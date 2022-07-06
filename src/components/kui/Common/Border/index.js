import { css } from 'styled-components'

export const Border = css`
    ${(props) => {
        switch(props.border){
            case "base":
                return css`
                    border-bottom: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--borderdark10);
                    }
                `

            case "top":
                return css`
                    border-top: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-top: var(--borderdark10);
                    }
                `

            case "start":
                return css`
                    border-left: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-left: var(--borderdark10);
                    }
                `

            case "end":
                return css`
                    border-right: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-right: var(--borderdark10);
                    }
                `

            case "contained":
                return css`
                    border: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border: var(--borderdark10);
                    }
                `

            default:
                return css`
                    border-bottom: ${props => props.borderBase};
                    border-top: ${props => props.borderTop};
                    border-left: ${props => props.borderStart};
                    border-right: ${props => props.borderEnd};
                    border: ${props => props.border};
                    @media(prefers-color-scheme: dark){
                        border: ${props => props.borderd};
                    }
                `
        }
    }}
`