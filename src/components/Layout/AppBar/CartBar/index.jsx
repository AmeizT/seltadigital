import { IconContext } from 'react-icons'
import { BiWindowClose } from 'react-icons/bi'
import { MdCropSquare, MdBackpack, MdNotifications, MdNavigation, MdClose, MdFullscreenExit } from 'react-icons/md'
import { Button, Container, IconButton, Item, Stack, Segment, Text, View } from '../../../kneat-ui'

export default function CartBar({ bag, setBag, bagQty, navi, setNavi, notices, setNotices }){
    function handleExit(){
        if(bag){
            setBag(!bag)
        }else if(navi){
            setNavi(!navi)
        } else if(notices){
            setNotices(!notices)
        }
    }
    return (
        <Segment 
        ht="var(--bar-sm)" 
        posv="center" 
        space="0 var(--md)" 
        border="base" 
        zx={1300} 
        paint="var(--snow10)"
        paintd="var(--dark70)">
            <Stack wt="fit" ht="min">
                <Item>
                    <IconButton
                    rad="50px"
                    space="9px"
                    fill='var(--dark40)'
                    filld="var(--snow20)"
                    paint="#0066b212">
                        <IconContext.Provider value={{ size: 20 }}>
                            {bag && <MdBackpack />}
                            {navi && <MdNavigation />}
                            {notices && <MdNotifications />}
                        </IconContext.Provider>
                    </IconButton>
                    
                </Item>
            </Stack>

            <Stack wt="min" ht="min" gutter="0 0 0 auto">
                <Item>
                    <Button
                    size="md"
                    rad="sm"
                    space="0"
                    variant={500}
                    fill='var(--dark40)'
                    filld="var(--snow20)"
                    onClick={handleExit}>
                        <IconContext.Provider value={{ size: 24 }}>
                            <MdClose />
                        </IconContext.Provider>
                    </Button>
                </Item>
            </Stack>
        </Segment>
    )
}