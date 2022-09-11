import { Box } from "../../@fastor"

export default function Content({ children }){
    const main = {
        as: "main",
        move: "y",
    }

    return (
        <Box {...main}>{children}</Box>
    )
}