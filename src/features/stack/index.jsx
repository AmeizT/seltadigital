import { CgMore } from "react-icons/cg"
import { useStack } from "../../data/stack"
import { Box, Button, Icon, Item, List, ListItem } from "../../@fastor"

export default function TechStack({ stacks }){
    return (
        <Box space="var(--sz90) 0">
            <Item>
                <List view="grid" gap="var(--sz60) 0" gtc="repeat(4, 1fr)" move="x-wrap" mx="between">
                    {stacks.slice(0, 7).map(stack => (
                        <ListItem key={stack._id}>
                            <Icon size={28}>{stack.icon}</Icon>
                        </ListItem>
                    ))}
                    <ListItem>
                        <Button space="0">
                            <Icon size={28}>
                                <CgMore />
                            </Icon>
                        </Button>
                    </ListItem>
                </List>
            </Item>
        </Box>
    )
}