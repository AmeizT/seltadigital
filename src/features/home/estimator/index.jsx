import { StickSector } from "../../../components"
import { Item, Stack, Text } from "../../../@fastor"

export default function Estimator(){
    return (
        <StickSector name="Estimate the costs.">
            <Stack move="y" pt="var(--sz50)" pb="var(--sz70)">
                <Item>
                    <Text fs={18}>
                        We can talk all day but the works needs to be done. Let&apos;s estimate how much your project will cost. Shall we? 
                    </Text> 
                </Item>

                <Item>
                    
                </Item>
            </Stack>
        </StickSector>
    )
}