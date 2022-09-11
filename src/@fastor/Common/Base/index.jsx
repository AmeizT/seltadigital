import { css } from 'styled-components'

export const Base = css`
    ${(props) => {
        switch(props.w){
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

            case "predict":
                return css`
                    width: 100%;
                    width: -webkit-fill-available;
                `;

            default:
                return css`
                    width: ${props => props.w || "100%" };
                `
        }
    }}

    ${(props) => {
        switch(props.h){
            case "fill":
                return css`
                    height: 100vh;
                `
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

            case "predict":
                return css`
                    height: 100%;
                    height: -webkit-fill-available;
                `;

            default:
                return css`
                    height: ${props => props.h || "fit-content"};
                `
        }
    }}
    
    min-height: ${props => props.mh};
    
    ${(props) => {
        switch(props.view){
            case "fx":
                return css`
                    display: flex;
                `

            case "gd":
                return css`
                    display: grid;
                `

            case "bk":
                return css`
                    display: block;
                `

            case "ibk":
                return css`
                    display: inline-block;
                `

            case "inf":
                return css`
                    display: inline-flex;
                `

            case "no":
                return css`
                    display: none;
                `

            default:
                return css`
                    display: ${props => props.view || "flex"};
                `
        }
    }}

    ${(props) => {
        switch(props.viewon){
            case "phone":
                return css`
                    display: none;
                    @media only screen and (max-width: 767px){
                        display: ${props => props.view || "flex"};
                    }
                `

            case "tab":
                return css`
                    display: none;
                    @media only screen and (min-width: 767px and max-width: 1023px){
                        display: ${props => props.view || "flex"};
                    }
                `

            case "both":
                return css`
                    display: none;
                    @media only screen and (max-width: 1023px){
                        display: ${props => props.view || "flex"};
                    }
                `

            case "desk":
                return css`
                    display: none;
                    @media only screen and (min-width: 1024px){
                        display: ${props => props.view || "flex"};
                    }
                `
        }
    }}

    ${(props) => {
        switch(props.pos){
            case "fxd":
                return css`
                    position: fixed;
                `

            case "rtv":
                return css`
                    position: relative;
                `

            case "abs":
                return css`
                    position: absolute;
                `

            case "stk":
                return css`
                    position: sticky;
                `

            default:
                return css`
                    position: ${props => props.pos};
                `
        }
    }}

    ${(props) => {
        switch(props.move){
            case "x":
                return css`
                    flex-flow: row nowrap;
                `

            case "x-wrap":
                return css`
                    flex-flow: row wrap;
                `

            case "xr":
                return css`
                    flex-flow: row-reverse nowrap;
                `

            case "xr-wrap":
                return css`
                    flex-flow: row-reverse wrap;
                `

            case "y":
                return css`
                    flex-flow: column nowrap;
                `

            case "y-wrap":
                return css`
                    flex-flow: column wrap;
                `

            case "yr":
                return css`
                    flex-flow: column-reverse nowrap;
                `

            case "yr-wrap":
                return css`
                    flex-flow: column-reverse wrap;
                `

            default:
                return css`
                    flex-flow: ${props => props.move};
                `
        }
    }}

    ${(props) => {
        switch(props.my){
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
                    align-items: ${props => props.ym};
                `
        }
    }}

    ${(props) => {
        switch(props.mx){
            case "start":
                return css`
                    justify-content: start;
                `

            case "center":
                return css`
                    justify-content: center;
                `

            case "end":
                return css`
                    justify-content: end;
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

            case "stretch":
                return css`
                    justify-content: stretch;
                `

            case "base":
                return css`
                    justify-content: baseline;
                `
            
            default:
                return css`
                    justify-content: ${props => props.mx};
                ` 
        }
    }}

    flex-grow: ${props => props.grow};
    flex-shrink: ${props => props.shrink};
    flex-basis: ${props => props.basis};
    flex: ${props => props.flex};
    grid-template: ${props => props.grid};
    grid-template-columns: ${props => props.gtc};
    grid-template-rows: ${props => props.gtr};
    grid-column: ${props => props.gc};
    grid-row: ${props => props.gr};
    grid-auto-rows: ${props => props.gar};
    place-items: ${props => props.xy};
    gap: ${props => props.gap};
    scroll-snap-align: ${props => props.snap};
    scroll-snap-stop: ${props => props.stop};
    top: ${props => props.ptop};
    bottom: ${props => props.pbase};
    left: ${props => props.pstart};
    right: ${props => props.pright};
    order: ${props => props.rank};
    z-index: ${props => props.zx};
    box-shadow: ${props => props.shadow};
    overflow: ${props => props.off};
    overflow-x: ${props => props.ox};
    overflow-y: ${props => props.oy};
    visibility: ${props => props.vb};
    opacity: ${props => props.opt};
    transform: ${props => props.trans4m};
    transform-origin: ${props => props.origin};
    background-image: ${props => props.bimg};
    background-size: ${props => props.bsize};
    background-position: ${props => props.bpos};
    background-repeat: ${props => props.repeat};
    background-origin: ${props => props.bor};
    background-attachment: ${props => props.attach};
    background: ${props => props.bgg};
    background: ${props => props.gradient};
    background-color: ${props => props.bg};
    @media(prefers-color-scheme: dark){
        background-color: ${props => props.bgd};
    }

    ${(props) => {
        switch(props.backdrop){
            case "blur":
                return css`
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    background: #ffffffdb;
                    @media(prefers-color-scheme: dark){
                        background: #10100feb;
                    }
                `

            case "mirror":
                return css`
                    background: #000000db;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                `

            case "fog":
                return css`
                    background: #00000090;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                `
        }
    }}
    transition: ${props => props.$transition};

    

    @media only screen and (min-width: 769px){
        width: ${props => props.w5x};
        height: ${props => props.h5x};
        display: ${props => props.view5x};
        grid-template: ${props => props.grid5x};
        grid-template-columns: ${props => props.gtc5x};
        grid-template-rows: ${props => props.gtr5x};
        grid-column: ${props => props.gc5x};
        flex-direction: ${props => props.move5x};
        gap: ${props => props.gap5x};
        order: ${props => props.rank5x};
        padding: ${props => props.space5x};
        margin: ${props => props.gutter5x};
        justify-content: ${props => props.xm5x};
        align-items: ${props => props.ym5x};
    }
    
    @media only screen and (min-width: 1024px){
        width: ${props => props.w7x};
        height: ${props => props.h7x};
        display: ${props => props.view7x};
        grid-template: ${props => props.grid7x};
        grid-template-columns: ${props => props.gtc7x};
        grid-template-rows: ${props => props.gtr7x};
        grid-column: ${props => props.gc7x};
        ${(props) => {
            switch(props.move7x){
                case "x":
                    return css`
                        flex-flow: row nowrap;
                    `

                case "x-wrap":
                    return css`
                        flex-flow: row wrap;
                    `

                case "xr":
                    return css`
                        flex-flow: row-reverse nowrap;
                    `

                case "xr-wrap":
                    return css`
                        flex-flow: row-reverse wrap;
                    `

                case "y":
                    return css`
                        flex-flow: column nowrap;
                    `

                case "y-wrap":
                    return css`
                        flex-flow: column wrap;
                    `

                case "yr":
                    return css`
                        flex-flow: column-reverse nowrap;
                    `

                case "yr-wrap":
                    return css`
                        flex-flow: column-reverse wrap;
                    `

                default:
                    return css`
                        flex-flow: ${props => props.move7x};
                    `
            }
        }}
        gap: ${props => props.gap7x};
        order: ${props => props.rank7x};
        padding: ${props => props.space7x};
        margin: ${props => props.gutter7x};
        justify-content: ${props => props.mx7x};
        align-items: ${props => props.my7x};
    }

    & svg {
        fill: ${props => props.iHue};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.iHued};
        }
    }

    & img {
        border-radius: ${props => props.imgRad};
    }

    &.gradientBorder {
        border-style: solid;
        border-width: 4px;
        border-image-source: var(--grad2);
        border-image-slice: 1;
    }

    &.fadeIn {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
        transition: transform 200ms ease-out;
    }

    &.fadeOut {
        opacity: 0;
        transform: translateY(100px);
        visibility: hidden;
        transition: transform 200ms ease-out;
    }

    &.grow {
        scale: 1.1;
        transform-origin: center;
        transition: scale 140ms ease-in;
    }

    &.shrink {
        scale: 0.9;
        transform-origin: center;
        transition: scale 140ms ease-out;
    }

    &[data-ref="0"] {
        background: var(--grad8);
    }

    &[data-ref="1"] {
        background: var(--grad2);
    }

    &[data-ref="2"] {
        background: var(--grad13);
    }

    &[data-ref="3"] {
        background: var(--grad15);
    }

    &[data-ref="4"] {
        background: var(--grad5);
    }
`