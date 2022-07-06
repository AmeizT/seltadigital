import styled, {css} from 'styled-components'

export const Hero = styled.div `
    width: 100%;
    ${(props) => {
        switch(props.size){
            case "md": 
                return css `
                    height: 70vh;                
                `
            
            case "max":
                return css`
                    height: 100vh;
                `
            
            default:
                return css`
                    height: 100vh;
                `
        }
    }}
    display: flex;
    justify-content: space-between;
    padding-top: var(--bar-md);
    background: ${props => props.bg};
`