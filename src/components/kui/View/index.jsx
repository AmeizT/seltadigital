import styled, { css } from 'styled-components'
import { Alignment, Border, BoxLayout, Radius, Space } from '../Common'

export const View = styled.div.attrs(props => ({
    
}))`
    ${BoxLayout}
    ${Alignment}
    ${Space}
    ${Border}
    ${Radius}

    &.viewable {
        display: ${props => props.view || 'flex'};
    }

    &.not-viewable {
        display: ${props => props.view || 'none'};
    }

    & img {
        object-fit: ${props => props.objFit};
    }
`

export const Container = styled(View)`
  padding: ${(props) => props.space || "0 var(--space-md)"};
  @media only screen and (min-width: 1024px) {
    padding: ${(props) => props.spacex3 || "0 var(--space-mxx)"};
  }
`;

export const Item = styled(View).attrs({
    
})`
    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }
`

export const Segment = styled(View)``;

export const Stack = styled(View)`
    ${(props) => {
        switch(props.variant){
            case 'overlay':
                return css`
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: 1;
                    background: var(--dark00);
                `
        }
    }}
    
    &:last-child {
        border-bottom: ${props => props.baseBorderLast};
    }
`

export const Layer = styled(View)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900;
    ${(props) => {
        switch(props.variant){
            case 'night':
                return css`
                    background: #00000080;
                `

            case 'dark':
                return css`
                    background: #0000004f;
                `

            case 'snow':
                return css`
                    background: #ffffff75;
                `

            default:
                return css`
                    background: #0000004f;
                `
        }
    }}
`

export const BackDrop = styled(View)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900;
    ${(props) => {
        switch(props.variant){
            case 'night':
                return css`
                    background: #00000080;
                `

            case 'dark':
                return css`
                    background: #0000004f;
                `

            case 'snow':
                return css`
                    background: #ffffff75;
                `

            default:
                return css`
                    background: #0000004f;
                `
        }
    }}
`

export const Drawer = styled(View).attrs({
    as: 'dialog',
})`
    position: fixed;
    left: 0;
    color: var(--dark-700);
    z-index: 1100;
    border: none;
    transition: 100ms background ease-in-out;
    @media(prefers-color-scheme: dark){
        color: var(--snow20);
    }
`





