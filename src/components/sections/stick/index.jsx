import { Container, Strip, Headtext, Item, Sector, Stack } from "../../../@fastor"

export function StickSector({ name, content, children }){
    const textProps = {
        hue: "var(--dark40)",
        fs3x: "var(--fs3x)", 
        leading: 1,
    }

    return (
        <Sector space="var(--sz70) 0 0">
            <Container move="y">
                <Item w="fit" ptop="var(--hs40)" zx={1600}>
                    <Headtext {...textProps}>
                        {name}
                    </Headtext>
                </Item>

                <Stack move="y">
                    {children}
                </Stack>

                <Strip />
            </Container>
        </Sector>
    )
}

StickSector.defaultProps = {
    name: null,
    content: null,
}