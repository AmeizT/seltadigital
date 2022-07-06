import styled, {css} from 'styled-components'

export const Badge = styled.span`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 6px;
    padding: .5rem;
    clip-path: circle();
    font-size: var(--text-xs);
    color: ${props => props.color || 'var(--snow)'};
    background: ${props => props.background || 'var(--primary)'};

`