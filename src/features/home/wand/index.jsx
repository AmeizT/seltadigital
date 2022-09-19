import { VscWand } from "react-icons/vsc"
import { Button, Icon, Item, List } from "../../../@fastor"

export default function MagicWand({ tapped, handleCount }){
    const numbers = [1, 2, 3, 4, 5]

    const wand = {
        w: "fit", 
        pos: "fxd", 
        pend: "var(--sz50)", 
        pbase: "var(--sz50)",
    }

    const buttonProps = {
        rad: "50px",
        space: "var(--sz50)",
        bg: "#ffffff",
        shadow: "var(--shadow)",
    }

    return (
        <Item {...wand}>
            <Button
            {...buttonProps} 
            className={tapped && "active"} onClick={() => handleCount()}>
                <Icon size="28px" hue="var(--dark40)">
                    <VscWand />
                </Icon>
            </Button>
        </Item>
    )
}