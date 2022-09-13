import { Container, Headtext, Item, Sector, Stack } from "../../../@fastor"

export function StickSector({ name, content, children }){
    const textProps = {
        hue: "var(--dark40)",
        fs3x: "var(--fs3x)", 
    }

    return (
        <Sector space="var(--sz70) 0">
            <Container move="y">
                <Item w="fit" pos="stk" ptop="var(--hs40)" zx={1600}>
                    <Headtext {...textProps}>
                        {name}
                    </Headtext>
                </Item>

                <Stack move="y">
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