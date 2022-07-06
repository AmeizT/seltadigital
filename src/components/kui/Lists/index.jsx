import styled, { css } from 'styled-components'
import { BoxLayout, Alignment, Border, Space, Radius } from '../Common'

export const List = styled.ul `
    ${BoxLayout}
    ${Alignment}
    ${Space}
    ${Border}
    ${Radius}
`

export const ListItem = styled.li.attrs({
    role: 'listitem',
})`
    ${Alignment}
    ${Border}
    ${Space}
    width: ${props => props.wt};
    padding-left: ${props => props.spaceStart};
    &:nth-child(1) {
        padding-left: ${props => props.navSpaceStart};
    }

`

