import styled, {css} from 'styled-components'
import { Radius, Typography } from '../Common'

export const Button = styled.button.attrs({
    role: 'button',
    tabIndex: 0,
})`
    ${Typography}
    width: ${props => props.wt};
    height: ${props => props.ht};
    display: ${props => props.view || 'grid'};
    place-items: ${props => props.place || 'center'};
    position: ${props => props.position || 'relative'};
    scroll-snap-align: ${props => props.snap};
    padding: ${props => props.space || '8px 18px'};
    @media only screen and (min-width: 1020px){
        padding: ${props => props.spacex3 || '4px 12px'};
    }
    border-radius: ${props => props.radius || 'var(--radius-xs)'};
    border: ${props => props.border};
    margin: 0;
    color: ${props => props.color};
    transition: color background var(--ease10);
    background: ${props => props.paint};
    box-shadow: ${props => props.shadow};
    @media(prefers-color-scheme: dark){
        color: ${props => props.colord};
        background: ${props => props.paintd};
    }
    ${Radius}

    & svg {
        width: ${props => props.svgSizeX};
        height: ${props => props.svgSizeY};
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }

    &:hover {
        background: ${props => props.hoverPaint};
        color: ${props => props.hoverColor};
    }

    &:hover svg {
        fill: ${props => props.hoverIcon};
        transition: color background var(--ease-100);
    }

    &:disabled {
        color: var(--snow60);
        background: var(--snow40);
        @media(prefers-color-scheme: dark){
            color: var(--dark-200);
            background: var(--dark50);
        }
    }
`

export const MaxButton = styled(Button) `
    width: 100%;
    height: auto;
`

export const SnoozeButton = styled(Button).attrs({
    disabled: "disabled",
}) ``

export const IconButton = styled(Button) `
    padding: ${props => props.space || 'var(--space-xs)'};
    border-radius: ${props => props.radius || 'var(--radius-mx)'};
`

export const LinkButton = styled(Button).attrs({
    as: "a",
}) `
`