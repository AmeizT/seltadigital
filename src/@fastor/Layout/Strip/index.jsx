import styled from "styled-components"

export const Strip = styled.hr `
    width: 100%;
    margin: 0;
    border-top: ${props => props.bt || "1px solid var(--gray10)"};
    @media(prefers-color-scheme: dark){
        border-top: ${props => props.btd};
    }
`