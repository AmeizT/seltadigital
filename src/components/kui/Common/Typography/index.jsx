import { css } from 'styled-components'

export const Typography = css`
    padding: ${props => props.space};
    margin: ${props => props.gutter};
    line-height: ${props => props.leading};
    letter-spacing: ${props => props.tracking};

    ${(props) => {
        switch(props.typeface){
            case "secondary":
                return css`
                    font-family: var(--typeface-secondary);
                `

            case "primary":
                return css`
                    font-family: var(--typeface);
                `
        }
    }}
    
    ${(props) => {
        switch(props.pos){
            case "start":
                return css`
                    text-align: left;
                `
            
            case "center":
                return css`
                    text-align: center;
                `

            case "even":
                return css`
                    text-align: justify;
                `

            case "baseline":
                return css`
                    vertical-align: baseline;
                `

            case "top":
                return css`
                    vertical-align: text-top; 
                `

            case "bottom":
                return css`
                    vertical-align: text-bottom;
                `

            case "sup":
                return css`
                    vertical-align: super;
                `

            case "sub":
                return css`
                    vertical-align: sub;
                `

            default:
                return css`
                    text-align: ${props => props.pos};
                    @media only screen and (min-width: 1024px){
                        text-align: ${props => props.posx3};
                    }
                    
                `
        }
    }}

    ${(props) => {
        switch(props.color){
            case "dark":
                return css`
                    color: var(--dark50);
                `

            case "primary":
                return css`
                    color: var(--primary);
                `
            
            default:
                return css`
                    color: ${props => props.color};
                    @media(prefers-color-scheme: dark){
                        color: ${props => props.colord};
                    }
                `;
        }
    }}

    ${(props) => {
        switch(props.saturation){
            case "strong":
                return css`
                    color: var(--dark40);
                    @media(prefers-color-scheme: dark){
                        color: var(--snow20);
                    }
                `

            case "weak":
                return css`
                    color: var(--gray20);
                    @media(prefers-color-scheme: dark){
                        color: var(--gray20);
                    }
                `
        }
    }}

    ${(props) => {
        switch(props.variant){
            case 100:
                return css`
                    font-weight: 100;
                `

            case 300:
                return css`
                    font-weight: 300;
                `

            case 400:
                return css`
                    font-weight: 400;
                `

            case 500:
                return css`
                    font-weight: 500;
                `

            case 600:
                return css`
                    font-weight: 600;
                `

            case 700:
                return css`
                    font-weight: 700;
                `

            case 900:
                return css`
                    font-weight: 900;
                `
        }
    }}
    
    ${(props) => {
        switch(props.size){
            case "xs":
                return css`
                    font-size: var(--text-xs);
                `

            case "sm":
                return css`
                    font-size: var(--text-sm);
                `

            case "md":
                return css`
                    font-size: var(--text-md);
                `

            case "main":
                return css`
                    font-size: var(--text-primary);
                `
            
            default: 
                return css`
                    font-size: ${props => props.size};
                    @media only screen and (min-width: 1024px){
                        font-size: ${props => props.sizex3};
                    }
                `
        }
    }}

    ${(props) => {
        switch(props.prefers){
            case "caps":
                return css`
                    text-transform: capitalize;
                `

            case "upper":
                return css`
                    text-transform: uppercase;
                `

            case "lower":
                return css`
                    text-transform: lowercase;
                `
            
            case "strike":
                return css`
                    text-decoration: line-through;
                `

            case "underline":
                return css`
                    text-decoration: underline;
                `

            case "lowerstrike":
                return css`
                    text-decoration: line-through;
                    text-transform: lowercase;
                `

            case "upperstrike":
                return css`
                    text-decoration: line-through;
                    text-transform: uppercase;
                `
        }
    }}
`