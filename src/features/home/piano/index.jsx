import { Box, Button, Container, Headtext, List, ListItem } from "../../../@fastor"

export default function PianoBar({ count }){
    const headtext = {
        textpos: "start",
        fs3x: "var(--fs3x)",
        leading: 1,
        hue: "transparent",
        stroke: "2px var(--gray10)",
    }
    return (
        <Box w="fit" pos="fxd" pstart="0" pbase="0" space="var(--sz50)">
            <Headtext {...headtext}>
                {count+1}.
            </Headtext>
        </Box>
    )
}