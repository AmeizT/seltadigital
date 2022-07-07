import styled, { css } from 'styled-components'

export const BoxLayout = css`
    ${(props) => {
        switch(props.wt){
            case "fit":
                return css`
                    width: fit-content;
                `

            case "max":
                return css`
                    width: max-content;
                `

            case "min":
                return css`
                    width: min-content;
                `

            default:
                return css`
                    width: ${props => props.wt || "100%" };
                `
        }
    }}

    ${(props) => {
        switch(props.ht){
            case "fit":
                return css`
                    height: fit-content;
                `

            case "max":
                return css`
                    height: max-content;
                `

            case "min":
                return css`
                    height: min-content;
                `

            case "maxFill":
                return css`
                    height: 100%;
                    height: -webkit-fill-available;
                `;

            default:
                return css`
                    height: ${props => props.ht || 'auto'};
                `
        }
    }}
    
    min-height: ${props => props.mh};
    display: ${props => props.view || "flex"};
    ${(props) => {
        switch(props.device){
            case "phone":
                return css`
                    display: flex;
                    @media only screen and (min-width: 1024px){
                        display: none;
                    }
                `

            case "desktop":
                return css`
                    display: none;
                    @media only screen and (min-width: 1024px){
                        display: flex;
                    }
                `
        }
    }}
    
    position: ${props => props.pos};
    flex-flow: ${props => props.dn};
    grid-template: ${props => props.grid};
    grid-template-columns: ${props => props.cn};
    grid-template-rows: ${props => props.rw};
    grid-column: ${props => props.gridCol};
    grid-row: ${props => props.grow};
    gap: ${props => props.gap};
    scroll-snap-align: ${props => props.snap};
    scroll-snap-stop: ${props => props.snapStop};
    top: ${props => props.top};
    bottom: ${props => props.base};
    left: ${props => props.start};
    right: ${props => props.end};
    padding: ${props => props.space};
    margin: ${props => props.gutter};
    order: ${props => props.series};
    z-index: ${props => props.zx};
    box-shadow: ${props => props.shadow};
    overflow: ${props => props.of};

    ${(props) => {
        switch(props.backdrop){
            case "blur":
                return css`
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    background: #ffffffbd;
                    @media(prefers-color-scheme: dark){
                        background: #10100feb;
                    }
                `

            case "dark":
                return css`
                    background: #18191a90;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                `
        }
    }}

    background: ${props => props.gradient};
    @media(prefers-color-scheme: dark){
        background-color: ${props => props.paintd};
    }
    background-image: ${props => props.viewImage};
    background-size: ${props => props.viewSize};
    background-position: ${props => props.viewPos};
    background-repeat: ${props => props.repeat};
    background-origin: ${props => props.origin};
    background-attachment: ${props => props.attach};
    background-color: ${props => props.paint};
    
    @media only screen and (min-width: 1024px){
        width: ${props => props.wtx3};
        height: ${props => props.htx3};
        display: ${props => props.viewx3};
        grid-template: ${props => props.gridx3};
        grid-template-columns: ${props => props.cnx3};
        grid-template-rows: ${props => props.rwx3};
        grid-column: ${props => props.gridColx3};
        flex-direction: ${props => props.dnx3};
        gap: ${props => props.gapx3};
        order: ${props => props.seriesx3};
        padding: ${props => props.spacex3};
        margin: ${props => props.gutterx3};
        justify-content: ${props => props.posx3};
        align-items: ${props => props.posv3};
    }

    &.view {
        display: ${props => props.view || 'flex'};
    }

    &.no-view {
        display: ${props => props.view || 'none'};
    }

    & svg {
        fill: ${props => props.iconPaint};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.iconPaintd};
        }
    }
`