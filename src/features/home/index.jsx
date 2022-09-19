import React from "react"
import Hero from "./hero"
import Showcase from "./showcase"
import MagicWand from "./wand"
import { useShowcase } from "../../data/projects"

export function Home(){
    const max = 3
    const showcaseMap = useShowcase()
    const [count, setCount] = React.useState(0)
    const [tapped, setTapped] = React.useState(false)
    const [height, setHeight] = React.useState("100vh")

    React.useEffect(() => {
        const body = document.querySelector("body")
        setHeight(body.innerHeight)
        console.log(height)
        const timer = setTimeout(() => {
            tapped && setTapped(false)
        }, 300)
        return () => clearTimeout(timer)
    }, [tapped, setTapped, setHeight, height])

    function handleCount(){
        setTapped(true)
        if(count >= max){
            return setCount(0)
        }
        return setCount(count + 1)
    }

    return (
        <React.Fragment>
            <Hero count={count} />
            <Showcase count={count} showcaseMap={showcaseMap} />
            <MagicWand tapped={tapped} handleCount={handleCount} />
        </React.Fragment>
    )
}