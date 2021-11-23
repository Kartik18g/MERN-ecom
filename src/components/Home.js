import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Shop For
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Accessories you'll ❤️
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis at hic reprehenderit quis consequatur porro perferendis, fugiat officiis dolorum! Odit hic asperiores maxime doloribus eligendi eius in, autem molestiae?
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            as={Link}
                            to="/shop"
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            View Products
                        </Button>
                        <Button rounded={'full'}>How It Works</Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1593259037198-c720f4420d7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                    }
                />
            </Flex>
        </Stack>
    );
}