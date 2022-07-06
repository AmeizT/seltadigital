import styled, {css} from 'styled-components'
import { Typography, Border, Space, Radius } from '../Common'

export const NavLink = styled.a `
    ${Typography}
    display: ${props => props.view};
    flex-flow: ${props => props.dn};
    justify-content: ${props => props.px};
    align-items: ${props => props.py || 'center'};
    font-size: ${props => props.size || 'var(--text-md)'};
    transition: all 100ms ease-in-out;
    ${Space}
    ${Radius}
    ${Border}
    
    ${(props) => {
        switch(props.space){
            case "all":
                return css`
                    padding: .25rem;
                `
            
            default:
                return css`
                    padding: ${props => props.space};
                `
        }
    }}

    ${(props) => {
        switch(props.paint){
            case "snow":
                return css`
                    background: var(--gray-100);
                `

            default:
                return css`
                    background: ${props => props.paint};
                `
        }
    }}

    ${(props) => {
        switch(props.paintd){
            case "dark":
                return css`
                    background: var(--dark-500);
                `

            default:
                return css`
                    @media(prefers-color-scheme: dark){
                        background: ${props => props.paintd};
                    }
                `
        }
    }}

    ${(props) => {
        switch(props.shadow){
            case "main":
                return css`
                    box-shadow: var(--shadow);
                `
        }
    }}

    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }

    &:hover {
        color: ${props => props.hov};
    }
`