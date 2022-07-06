import { css } from 'styled-components'

export const Alignment = css`
    ${(props) => {
        switch(props.posv){
            case "start":
                return css`
                    align-items: flex-start;
                `

            case "center":
                return css`
                    align-items: center;
                `

            case "end":
                return css`
                    align-items: flex-end;
                `

            default:
                return css`
                    place-items: ${props => props.posy};
                    
                `
        }
    }}

    ${(props) => {
        switch(props.posx){
            case "start":
                return css`
                    justify-content: flex-start;
                `

            case "center":
                return css`
                    justify-content: center;
                `

            case "end":
                return css`
                    justify-content: flex-end;
                `

            case "between":
                return css`
                    justify-content: space-between;
                `

            case "around":
                return css`
                    justify-content: space-around;
                `

            case "even":
                return css`
                    justify-content: space-evenly;
                `
            
            default:
                return css`
                    justify-content: ${props => props.posx};
                ` 
        }
    }}
`