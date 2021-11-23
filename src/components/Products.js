import {
    Box,
    Heading,
    Flex,
    Link
} from '@chakra-ui/react';
import ProductCard from './Product/ProductCard'
import Filters from './FilterDrawer'
import Values from './Values';
import { Link as lee } from 'react-router-dom'

export default function Products() {
    const products = [
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/Red-Fusion-38-40_1024x1024.jpg?v=1611006835' },
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/Pomegranate-40_1024x1024.jpg?v=1620410372' },
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/Sport_Loop-Midnight-40_1024x1024.jpg?v=1620410372' },
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/12-Black_1024x1024.jpg?v=1604525686' },
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/12-Sunflower_1024x1024.jpg?v=1630739597' },
        { imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/12-Mystery-Flame_1024x1024.jpg?v=1606412986' }

    ]
    return (
        <Box w="100%" color="gary.600" >
            <Box p={6} textAlign={'center'} border={'none'} >
                <Flex justifyContent={'center'} flexDirection={'row'}>
                    <Heading >Showing All Products...</Heading>
                    <Filters />
                </Flex>
            </Box>
            <Flex justifyContent={'center'} flexWrap={'wrap'} >
                {products.map(product => <Link to={'/product/s'} as={lee} ><ProductCard data={product} /></Link>)}
            </Flex>
        </Box >
    );
}