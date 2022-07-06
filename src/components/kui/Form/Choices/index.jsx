import styled from 'styled-components'
import { Input, Radius, Space, Typography } from '../../Common'

export const Choices = styled.select.attrs(props => ({
    placeholder: props.faker,
}))`
    ${Input}
    ${Radius}
    ${Space}
    ${Typography}
`

export const Option = styled.option `
    ${Typography}
`
