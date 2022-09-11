import { css } from 'styled-components'

export const Border = css`
    ${(props) => {
        switch(props.borders){
            case "base":
                return css`
                    border-bottom: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--bd10);
                    }
                `

            case "baseSnow":
                return css`
                    border-bottom: var(--bsnow);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--bsnow);
                    }
                `

            case "baseDark":
                return css`
                    border-bottom: var(--bdark);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--bsnow);
                    }
                `

            case "top":
                return css`
                    border-top: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-top: var(--bd10);
                    }
                `

            case "start":
                return css`
                    border-left: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-left: var(--bd10);
                    }
                `

            case "end":
                return css`
                    border-right: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-right: var(--bd10);
                    }
                `

            case "contained":
                return css`
                    border: var(--b20);
                    @media(prefers-color-scheme: dark){
                        border: var(--bd20);
                    }
                `

            default:
                return css`
                  border-bottom: ${(props) => props.bb};
                  border-top: ${(props) => props.bt};
                  border-left: ${(props) => props.bl};
                  border-right: ${(props) => props.br};
                  border: ${(props) => props.borders};
                  @media (prefers-color-scheme: dark) {
                    border: ${(props) => props.borders};
                  }
                `
        }
    }}
`