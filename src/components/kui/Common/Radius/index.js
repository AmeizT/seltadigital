import { css } from 'styled-components'

export const Radius = css `
    ${(props) => {
        switch(props.rad){
            case "xs":
                return css`
                    border-radius: var(--radius-xs);
                `
                
            case "sm":
                return css`
                    border-radius: var(--radius-sm);
                `

            case "md":
                return css`
                    border-radius: var(--radius-md);
                `

            case 50:
                return css`
                    border-radius: var(--radius50);
                `

            case "lg":
                return css`
                    border-radius: var(--radius90);
                `
            
            case "round":
                return css`
                    clip-path: circle();
                `

            default:
                return css`
                    border-radius: ${props => props.rad};
                `
        }
    }}

    ${(props) => {
        switch(props.radTopStart){
            case "xs":
                return css`
                    border-top-left-radius: var(--radius-xs);
                `
                
            case "sm":
                return css`
                    border-top-left-radius: var(--radius-sm);
                `

            case "md":
                return css`
                    border-top-left-radius: var(--radius-md);
                `

            case "lg":
                return css`
                    border-top-left-radius: var(--radius-mx);
                `

            default:
                return css`
                    border-top-left-radius: ${props => props.radStart};
                `
        }
    }}

    ${(props) => {
        switch(props.radTopEnd){
            case "xs":
                return css`
                    border-top-right-radius: var(--radius-xs);
                `
                
            case "sm":
                return css`
                    border-top-right-radius: var(--radius-sm);
                `

            case "md":
                return css`
                    border-top-right-radius: var(--radius-md);
                `

            case "lg":
                return css`
                    border-top-right-radius: var(--radius-mx);
                `

            default:
                return css`
                    border-top-right-radius: ${props => props.radTopEnd};
                `
        }
    }}

    ${(props) => {
        switch(props.radBaseStart){
            case "xs":
                return css`
                    border-bottom-left-radius: var(--radius-xs);
                `
                
            case "sm":
                return css`
                    border-bottom-left-radius: var(--radius-sm);
                `

            case "md":
                return css`
                    border-bottom-left-radius: var(--radius-md);
                `

            case "lg":
                return css`
                    border-bottom-left-radius: var(--radius-mx);
                `
            
            default:
                return css`
                    border-bottom-left-radius: ${props => props.radBaseStart};
                `
        }
    }}

    ${(props) => {
        switch(props.radBaseEnd){
            case "xs":
                return css`
                    border-bottom-right-radius: var(radius-xs);
                `
                
            case "sm":
                return css`
                    border-bottom-right-radius: var(radius-sm);
                `

            case "md":
                return css`
                    border-bottom-right-radius: var(radius-md);
                `

            case "lg":
                return css`
                    border-bottom-right-radius: var(radius-mx);
                `

            default:
                return css`
                    border-bottom-right-radius: ${props => props.radBaseEnd};
                `
        }
    }}
`