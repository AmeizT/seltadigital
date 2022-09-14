import React from "react"
import Hero from "./hero"
import Showcase from "./showcase"
import Estimator from "./estimator"
import { useShowcase } from "../../data/projects"

export function Home(){
    const showcaseMap = useShowcase()
    return (
        <React.Fragment>
            <Hero />
            <Showcase showcaseMap={showcaseMap} />
        </React.Fragment>
    )
}