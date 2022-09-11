import styled, {css} from 'styled-components'
import { Base, Border, Radius, Space, Typography } from '../../Common'

export const Button = styled.button.attrs({
    role: 'button',
    tabIndex: 0,
})`
    ${Base}
    width: ${props => props.w || "fit-content"};
    place-items: center;
    position: relative;
    padding: ${props => props.space || '12px 24px'};
    @media only screen and (min-width: 1020px){
        padding: ${props => props.space7x || '7px 16px'};
    }
    ${Border}
    ${Radius}
    ${Space}
    ${Typography}
    transition: 100ms background ease-in-out;

    &[data-cart-count]::before {
        content: attr(data-cart-count);
        width: 1.4rem;
        height: 1.4rem;
        display: grid;
        place-items: center;
        position: absolute;
        top: -0.2rem;
        right: -0.2rem;
        border-radius: 50px;
        color: var(--snow10);
        background: var(--firebrick);
    }

    & svg {
        width: ${props => props.svgSizeX};
        height: ${props => props.svgSizeY};
        fill: ${props => props.iHex};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.iHexd};
        }
    }

    ${(props) => {
        switch(props.mouseover){
            case "dark":
                return css`
                    &:hover {
                        background: var(--dark40);
                        color: var(--snow20);
                    }
                `
        }
    }}

    &:hover {
        background: ${props => props.hoverPaint};
        color: ${props => props.hoverColor};
    }

    &:hover svg {
        fill: ${props => props.hoverIcon};
        transition: 100ms fill ease-in-out;
    }

    &:disabled {
        color: var(--gray20);
        background: var(--snow40);
        @media(prefers-color-scheme: dark){
            color: var(--gray20);
            background: var(--dark50);
        }
    }
`