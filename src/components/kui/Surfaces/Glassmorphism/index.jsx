import { Box } from '../../Box'
import styled from 'styled-components'

export const Glassmorphism = styled(Box)`
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: #ffffff4f;
    @media(prefers-color-scheme: dark){
        background: #10100fdb;
    }
`