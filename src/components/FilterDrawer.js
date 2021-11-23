import React from 'react'

import { Button, Drawer, DrawerBody, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, Input, DrawerFooter, Image } from '@chakra-ui/react'


function Filters() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
                <Image width={'25px'} src='https://www.svgrepo.com/show/263989/filter.svg' />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Add filters to your search</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Search Products..." />
                    </DrawerBody>

                    <DrawerFooter >
                        <Button mx={'auto'} colorScheme="blue">Go</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Filters