import { Text } from '../Text'
import styled, { css } from 'styled-components'

export const Figure = styled.figure `
    width: ${props => props.width};
    height: ${props => props.height};
    display: ${props => props.view || 'block'};
    margin: ${props => props.gutter || 0};
    padding: ${props => props.space || 0};
`

export const FigCaption = styled(Text).attrs({
    as: 'figcaption'
}) `

`
