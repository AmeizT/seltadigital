import { Box } from '../Box'
import styled, { css } from 'styled-components'

export const SideBar = styled(Box).attrs({
    role: 'aside',
})`
    overflow-y: auto;
    border-right: var(--border);
    @media(prefers-color-scheme: dark){
        border-right: var(--border-dark);
    }
`
