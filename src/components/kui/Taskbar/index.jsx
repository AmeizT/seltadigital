import styled, {css} from 'styled-components'
import { Alignment, Border, BoxLayout, Space} from '../Common'

export const TaskBar = styled.footer.attrs({
    role: 'contentinfo',
})`
    ${BoxLayout}
    ${Space}
    ${Alignment}
    ${Border}

    & .brand svg {
        width: 6rem;

        & .primary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--snow-200);
            }
        }

        & .secondary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--snow-200);
            }
        }
    }
`