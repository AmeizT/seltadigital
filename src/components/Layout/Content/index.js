import { View } from "../../kui";

export default function Content({ children }){
    return (
        <View 
        as="main" 
        dn="column">
            {children}
        </View>
    )
}