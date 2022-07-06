import styled, { css } from 'styled-components'
import { Segment, Stack, Item } from '../../View'
import { Text } from '../../Text'
import { WordMark } from '../../../../shared/logo/wordmark/secondary'

export const Spin = styled.div`
    & .loader {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1000ms linear infinite
    }

    & .loader::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 4px solid var(--primary);
        animation: prixClipFix 2000ms linear infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes prixClipFix {
        0% {
            clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0);
        }

        25% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0);
        }

        50% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%);
        }

        75% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%);
        }

        100% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0);
        }
    }
`

export default function Spinner(){
    return (
        <Segment ht="100%" posv="center">
            <Stack dn="column">
                <Item space="md" posx="center">
                    <Spin><span className="loader"></span></Spin>
                </Item>

                <Item posx="center">
                    <WordMark />
                </Item>

                <Item posx="center" pt="2px">
                    <Text 
                    size="xs" 
                    pos="center" 
                    color="#cdcdcd" 
                    colord="var(--dark-500)">
                        Great discoveries await.
                    </Text>
                </Item>
            </Stack>
        </Segment>
    )
}