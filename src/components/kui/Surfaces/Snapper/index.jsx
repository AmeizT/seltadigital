import styled, {css} from 'styled-components'
import { BoxLayout } from '../../Common'

export const Snapper = styled.div `
    ${BoxLayout}
    display: ${props => props.view || 'grid'};
    grid-template-columns: ${props => props.columns};
    scroll-snap-type: ${props => props.snapType || 'x mandatory'};
    @media only screen and (min-width: 1020px){
        grid-template: ${props => props.gridx3};
        scroll-snap-type: ${props => props.snapType};
        overflow: hidden; 
    }
    overflow: ${props => props.of || 'scroll hidden'};
    -ms-overflow-style: none;  
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`