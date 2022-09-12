import { Container, Headtext, Item, Sector, Stack } from "../../../@fastor"

export function StickSector({ name, content, children }){
    const textProps = {
        hue: "var(--snow40)",
        fs3x: "var(--fs3x)", 
        writemode: "vert",
    }

    return (
        <Sector space="var(--sz70) 0">
            <Container>
                <Stack>
                    <Item w="fit" pos="stk" ptop="var(--hs40)">
                        <Headtext {...textProps}>
                            {name}
                        </Headtext>
                    </Item>

                    {children}
                </Stack>
            </Container>
        </Sector>
    )
}

StickSector.defaultProps = {
    name: null,
    content: null,
}