import { Button, Hamburger, Item, List, ListItem, NavLink, Tiny } from "../../../../.next/@fastor"

export default function PhoneBar(){
    const numbers = [1, 2, 3, 4]

    const list = {
        w: "100%",
        mx: "center",
    }

    return (
        <Item>
            <List mx="between">
                <ListItem>
                    <Tiny fs={12} leading={1.25}>
                        beyond<br />brilliance
                    </Tiny>
                </ListItem>

                <ListItem>
                    <Button pos="rtv" space="0">
                        <Hamburger />
                    </Button>
                </ListItem>
            </List>
        </Item>
    )
}