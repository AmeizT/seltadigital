import styled, { css } from 'styled-components'
import { Alignment, Border, BoxLayout, Radius, Space } from '../Common'

export const Box = styled.div.attrs(props => ({
    
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
`

export const Container = styled(Box)`
    padding: ${props => props.space || '0 var(--space-md)'};
    @media only screen and (min-width: 1024px){
        padding: ${props => props.spacex3 || '0 var(--space-mxx)'};
    }
`

export const Item = styled(Box).attrs({
    
})`
    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }
`

export const Segment = styled(Box)``

export const Stack = styled(Box)`
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

export const Wrapper = styled(Box).attrs({
    as: 'section',
})`
    min-height: 100vh;
`





