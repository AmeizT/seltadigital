import { VscWand } from "react-icons/vsc"
import { Button, Icon, Item, List } from "../../../@fastor"

export default function MagicWand({ tapped, handleCount }){
    const numbers = [1, 2, 3, 4, 5]

    const wand = {
        w: "fit", 
        pos: "fxd", 
        pend: "var(--sz50)", 
        pbase: "var(--sz70)",
    }

    return (
        <Item {...wand}>
            <Button className={tapped && "active"} onClick={() => handleCount()}>
                <Icon size="24px">
                    <VscWand />
                </Icon>
            </Button>
        </Item>
    )
}