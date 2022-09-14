import { Container, Strip, Headtext, Item, Sector, Stack } from "../../../@fastor"

export function StickSector({ name, content, children }){
    const textProps = {
        hue: "var(--dark40)",
        fs3x: "var(--fs3x)",
        prefs: "lower",
        fw: 70, 
        leading: 1,
    }

    return (
        <Sector space="var(--sz70) 0 0">
            <Container move="y">
                <Item space="0">
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