import styled, {css} from 'styled-components'

export const Form = styled.form.attrs(props => ({

}))`
    width: ${props => props.wt || "100%" };
    height: ${props => props.ht};
    min-height: ${props => props.minHt};
    display: ${props => props.view || "flex"};
    position: ${props => props.position};
    flex-direction: ${props => props.direction};
    padding: ${props => props.space || '0'};
    margin: ${props => props.gutter || '0'};
`