import { Box } from "../../@fastor"

export default function Content({ children }){
    const main = {
        h: "100%",
        as: "main",
        pos: "rtv",
        move: "y",
    }

    return (
        <Box {...main}>{children}</Box>
    )
}