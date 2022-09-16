import { Item, List, ListItem } from "../../../../.next/@fastor"

export default function Dotbar(){
    const numbers = [1, 2, 3, 4, 5]

    return (
        <Item w="fit" pos="fxd" pend="calc(9px + var(--sz50))" ptop="var(--hs50)">
            <List w="fit" move="y">
                {numbers.map(number => (
                    <ListItem key={number} mb="var(--sz30)">
                        <Item as="span" w="12px" h="12px" rad="50px" bg="var(--dark40)" />
                    </ListItem>
                ))}
            </List>
        </Item>
    )
}