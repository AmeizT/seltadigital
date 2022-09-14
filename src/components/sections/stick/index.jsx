import { Container, Strip, Headtext, Item, Sector, Stack } from "../../../@fastor"

export function StickSector({ name, content, children }){
    const textProps = {
        hue: "var(--dark40)",
        fs3x: "var(--fs3x)",
        prefs: "lower",
        fw: 50, 
        leading: 1,
        textpos: "center",
    }

    return (
        <Sector space="var(--sz70) 0 0">
            <Container move="y" space="0">
                <Item space="0 var(--sz50)" mx="center" ptop="var(--hs40)" zx={1600}>
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