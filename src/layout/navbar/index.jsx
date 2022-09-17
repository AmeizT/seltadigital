import { useMenu } from "../../data/menu"
import Deskbar from "./deskbar"
import PhoneBar from "./phonebar"
import { Container, Header } from "../../@fastor"

export default function Navbar(){
    const menu = useMenu()

    const header = {
        h: "var(--hs40)",
        pos: "fxd",
        my: "center",
        zx: "var(--zx99)",
    }

    return (
        <Header {...header}>
            <Container>
                <PhoneBar />
                <Deskbar menu={menu} />
            </Container>
        </Header>
    )
}