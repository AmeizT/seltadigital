import React from 'react'
import { IconContext } from 'react-icons'
import { HiArrowRight } from 'react-icons/hi'
import { View, Button, Container, CharField, Item, Form, Segment, Stack, Text } from '../../../kui'

export default function Subscribe(){
    const [updates, setUpdates] = React.useState('whatsapp')
    const [subscribe, setSubscribe] = React.useState({
        phone: '',
        email: '',
        isSubscribed: '',
    })

    function handleSubscribeMethod(){
        if(updates === 'whatsapp'){
            return setUpdates('mail')
        }
        return setUpdates('whatsapp')
    }

    function handleChange(e){
        e.preventDefault()
        const names = e.target.name
        const value = e.target.value
        setSubscribe(values => ({...values, [names]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        setSubscribe({
            phone: '',
            email: '',
        })
    }

    return (
        <View space="var(--md) 0 var(--lg)">
            <Container dn="column" space="0" spacex3="0">
                <Segment pb={2}>
                    <Stack dn="column">
                        <Text pt={1} size="sm" variant={600}>
                            Get news & updates about new gadgets and more on your WhatsApp or email.
                        </Text>
                    </Stack>
                </Segment>

                <Segment pt={2}>
                    <Form
                    autoComplete="on"
                    onSubmit={handleSubmit}>
                        <Stack 
                        rad="sm"
                        ps={2}
                        paint="var(--snow-200)"
                        paintd="var(--dark-500)">
                            <Item>
                                {updates === 'whatsapp' ? 
                                    <CharField 
                                        type="text"
                                        name="phone" 
                                        value={subscribe.phone}
                                        onChange={handleChange}
                                        faker="Your WhatsApp" 
                                        space="12px 0"
                                        size="md"
                                        variant={500}
                                        required
                                        spellCheck="false"
                                        aria-labelledby='whatsapp number'
                                    /> :

                                    <CharField 
                                        type="email" 
                                        name="email"
                                        value={subscribe.email}
                                        onChange={handleChange}
                                        faker="name@example.com" 
                                        space="12px 0"
                                        size="md"
                                        variant={500}
                                        required
                                        spellCheck="false"
                                        aria-labelledby='user email'
                                    />
                                }
                            </Item>

                            <Item 
                            wt="fit" 
                            posx="end" 
                            posv="center">
                                <Button 
                                type="submit"
                                radius="mx"
                                space="12px">
                                    <IconContext.Provider value={{ size: 20, color: 'var(--snow-100)' }}>
                                        <HiArrowRight />
                                    </IconContext.Provider>
                                </Button>
                            </Item>
                        </Stack>
                    </Form>
                </Segment>

                <Segment pt={2}>
                    <Stack>
                        <Text 
                        size="xs" 
                        leading="1.75" 
                        saturation="weak">
                            By subscribing you agree to our Terms & Conditions. You may unsubscribe at any time.
                        </Text>
                    </Stack>
                </Segment>

                <Segment pt={2}>
                    <Stack>
                        <Button 
                        wt="100%"
                        size="sm"
                        variant={500}
                        color="var(--sky)"
                        onClick={handleSubscribeMethod}>
                            {updates === 'whatsapp' ? 
                                'Use Email' : 'Use WhatsApp'
                            }
                        </Button>
                    </Stack>
                </Segment>
            </Container>
        </View>
    )
}