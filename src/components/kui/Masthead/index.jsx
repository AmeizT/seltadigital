import styled, {css} from 'styled-components'
import { Border, BoxLayout } from '../Common';

export const MainBar = styled.div `
    ${BoxLayout}
    ${Border}

    ${(props) => {
        switch(props.place){
            case "top":
                return css`
                    top: 0;
                    `;
            
            case "base":
                return css`
                    bottom: 0;
                `;

            default: 
                return css`
                    top: 0;
                `;
        }
    }};
`;

export const MastHead = styled(MainBar).attrs({
    as: "header",
    role: "banner",
})`
    ${(props) => {
        switch(props.ht){
            case "sm":
                return css`
                    height: var(--bar10);
                `;

            case "md":
                return css`
                    height: var(--bar20);
                `;
            
            default:
                return css`
                    height: ${props => props.ht};
                `;
        }
    }};
    
    z-index: 1999;
    transition: background var(--ease10);
    background: var(--snow10);
    @media(prefers-color-scheme: dark){
        background: var(--dark70);
    }

    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }

    .brand svg {
        & .primary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--gray-300);
            }
        }

        & .secondary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--gray-300);
            }
        }
    }

    &.active {
        opacity: 0.99;
        background: var(--dark-500);
    }

    &.active svg {
        fill: var(--gray-300);
    }

    &.active .brand svg {
        & .primary {
            fill: var(--gray-300);
        }

        & .secondary {
            fill: var(--gray-300);
        }
    }
`