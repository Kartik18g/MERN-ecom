import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoColorFilterOutline,
    IoLogoBitcoin,
    IoScanOutline,
    IoSearchSharp,
    IoShieldCheckmarkOutline,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import Values from '../Values';
import Details from './Details';


const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Product() {
    return (
        <Container maxW={'7xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://cdn.shopify.com/s/files/1/0984/6842/products/Red-Fusion-38-40_1024x1024.jpg?v=1611006835'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Watch Band
                    </Text>
                    <Heading>Nylon Sport Loop</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Comfort. Day in, day out.
                        Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={

                                <Icon as={IoScanOutline} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'For : Apple watch (38mm,40mm,41mm)'}
                        />

                        <Feature
                            icon={
                                <Icon as={IoColorFilterOutline} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Color : Red'}
                        />
                        <Feature
                            icon={<Icon as={IoShieldCheckmarkOutline} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'12 Months Warranty'}
                        />
                    </Stack>
                    <Flex justifyContent={'space-between'} spacing={10} pt={2}>
                        <Button
                            flexGrow={'4'}
                            loadingText="Submitting"
                            size="lg"
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}>
                            Buy Now
                        </Button>
                        <Heading color={'gray.900'} textAlign={'center'} borderRadius={'10px'} flexGrow={'2'} background={'gray.100'}>20$</Heading>
                    </Flex>
                </Stack>

            </SimpleGrid>
            <Values />
            {/* <Details /> */}
        </Container >
    );
}