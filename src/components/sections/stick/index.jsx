import { Container, Headtext, Item, Sector, Stack } from "../../../@fastor"

export function StickSector({ name, content, children }){
    const textProps = {
        hue: "var(--snow40)",
        fs3x: "var(--fs3x)", 
        writemode: "vert",
    }

    return (
        <Sector space="var(--sz70) 0">
            <Container pos="rtv">
                <Stack pos="abs" h="100vh">
                    <Item w="fit" pos="stk" ptop="var(--hs40)" view="none">
                        <Headtext {...textProps}>
                            {name}
                        </Headtext>
                    </Item>
                </Stack>

                <Stack>
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