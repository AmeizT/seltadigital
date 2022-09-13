import { v4 as uuid } from "uuid"
import { RiFlutterFill, RiReactjsLine } from "react-icons/ri"
import { SiDjango, SiKotlin, SiAngular, SiNextdotjs } from "react-icons/si"
import { FaPython, FaSass, FaJs, FaReact } from "react-icons/fa";


const stack = [
    { _id: uuid(), name: "JS", icon: <FaJs /> },
    { _id: uuid(), name: "React.js", icon: <FaReact /> },
    { _id: uuid(), name: "Next", icon: <SiNextdotjs /> },
    { _id: uuid(), name: "Angular", icon: <SiAngular /> },
    { _id: uuid(), name: "Python", icon: <FaPython /> },
    { _id: uuid(), name: "Django", icon: <SiDjango /> },
    { _id: uuid(), name: "Kotlin", icon: <SiKotlin /> },
]

export function useStack(){
    return stack
}