import styled, {css} from 'styled-components'
import { Typography, Space } from '../Common'

export const Text = styled.p.attrs(props => ({
    as: props.item,
}))`
    ${Typography}
    ${Space}
    

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

    @media only screen and (min-width: 1024px){
        font-size: ${props => props.sizex3};
        line-height: ${props => props.leadx3};
    }
`

export const Time = styled(Text).attrs({
    as: 'time',
})`
    display: inline-block;
`
