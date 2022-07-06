import styled, { css } from 'styled-components'

export const Space = css`
    ${(props) => {
        switch(props.space){
            case "xs":
                return css`
                    padding: var(--xs);
                `;
                
            case "sm":
                return css`
                    padding: var(--sm);
                `;

            case "md":
                return css`
                    padding: var(--md);
                `;

            case "lg":
                return css`
                    padding: var(--lg);
                `;

            case "xxl":
                return css`
                    padding: var(--xxl);
                `

            default: 
                return css`
                    padding: ${props => props.space};
                `;
        };
    }}

    ${(props) => {
        switch(props.pt){
            case 1:
                return css`
                    padding-top: var(--xs);
                `

            case 2:
                return css`
                    padding-top: var(--sm);
                `

            case 3:
                return css`
                    padding-top: var(--md);
                `

            case 4:
                return css`
                    padding-top: var(--xxl);
                `

            case 5:
                return css`
                    padding-top: var(--xxxl);
                `

            case 10:
                return css`
                    padding-top: var(--bar10);
                `

            default:
                return css`
                    padding-top: ${props => props.pt};
                `
        }
    }}

    ${(props) => {
        switch(props.ps){
            case 1:
                return css`
                    padding-left: var(--xs);
                `

            case 2:
                return css`
                    padding-left: var(--sm);
                `

            case 3:
                return css`
                    padding-left: var(--md);
                `

            case 4:
                return css`
                    padding-left: var(--xxl);
                `

            case 5:
                return css`
                    padding-left: var(--xxxl);
                `

            default:
                return css`
                    padding-left: ${props => props.ps};
                `
        }
    }}

    ${(props) => {
        switch(props.pr){
            case 1:
                return css`
                    padding-right: var(--xs);
                `

            case 2:
                return css`
                    padding-right: var(--sm);
                `

            case 3:
                return css`
                    padding-right: var(--md);
                `

            case 4:
                return css`
                    padding-right: var(--xxl);
                `

            case 5:
                return css`
                    padding-right: var(--xxxl);
                `

            default:
                return css`
                    padding-right: ${props => props.pr};
                `
        }
    }}

    ${(props) => {
        switch(props.pb){
            case 1:
                return css`
                    padding-bottom: var(--xs);
                `

            case 2:
                return css`
                    padding-bottom: var(--sm);
                `

            case 3:
                return css`
                    padding-bottom: var(--md);
                `

            case 4:
                return css`
                    padding-bottom: var(--xxl);
                `

            case 5:
                return css`
                    padding-bottom: var(--xxxl);
                `

            default:
                return css`
                    padding-bottom: ${props => props.pb};
                `
        }
    }}

    ${(props) => {
        switch(props.mt){
            case 1:
                return css`
                    margin-top: var(--xs);
                `

            case 2:
                return css`
                    margin-top: var(--sm);
                `

            case 3:
                return css`
                    margin-top: var(--md);
                `

            case 4:
                return css`
                    margin-top: var(--xxl);
                `

            case 5:
                return css`
                    margin-top: var(--xxxl);
                `

            default:
                return css`
                    margin-top: ${props => props.mt};
                `
        }
    }}

    ${(props) => {
        switch(props.ms){
            case 1:
                return css`
                    margin-left: var(--xs);
                `

            case 2:
                return css`
                    margin-left: var(--sm);
                `

            case 3:
                return css`
                    margin-left: var(--md);
                `

            case 4:
                return css`
                    margin-left: var(--xxl);
                `

            case 5:
                return css`
                    margin-left: var(--xxxl);
                `

            default:
                return css`
                    margin-left: ${props => props.ms};
                `
        }
    }}

    ${(props) => {
        switch(props.mr){
            case 1:
                return css`
                    margin-right: var(--xs);
                `

            case 2:
                return css`
                    margin-right: var(--sm);
                `

            case 3:
                return css`
                    margin-right: var(--md);
                `

            case 4:
                return css`
                    margin-right: var(--xxl);
                `

            case 5:
                return css`
                    margin-right: var(--xxxl);
                `

            default:
                return css`
                    margin-right: ${props => props.mr};
                `
        }
    }}

    ${(props) => {
        switch(props.mb){
            case 1:
                return css`
                    margin-bottom: var(--xs);
                `

            case 2:
                return css`
                    margin-bottom: var(--sm);
                `

            case 3:
                return css`
                    margin-bottom: var(--md);
                `

            case 4:
                return css`
                    margin-bottom: var(--xxl);
                `

            case 5:
                return css`
                    margin-bottom: var(--xxxl);
                `

            default:
                return css`
                    margin-bottom: ${props => props.mb};
                `
        }
    }}
`

