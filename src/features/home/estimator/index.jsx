import { StickSector } from "../../../components"
import { Item, Stack, Text } from "../../../@fastor"

export default function Estimator(){
    return (
        <StickSector name="Cut to the chase">
            <Stack move="y">
                <Item>
                    <Text fs={32}>
                        We can talk all day but the works needs to be done. Let&apos;s estimate how much your project will cost. 
                    </Text> 
                </Item>

                <Item>
                    
                </Item>
            </Stack>
        </StickSector>
    )
}