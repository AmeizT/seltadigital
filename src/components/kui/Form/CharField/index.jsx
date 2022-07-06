import styled, {css} from 'styled-components'
import { Input, Radius, Space, Typography } from '../../Common'

export const CharField = styled.input.attrs(props => ({
    type: props.type,
    placeholder: props.faker,
}))`
    ${Input}
    ${Radius}
    ${Space}
    ${Typography}    
`