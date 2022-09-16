import { Box } from "../../@fastor"

export default function Content({ children }){
    const main = {
        mh: "100vh",
        as: "main",
        pos: "rtv",
        move: "y",
    }

    return (
        <Box {...main}>{children}</Box>
    )
}