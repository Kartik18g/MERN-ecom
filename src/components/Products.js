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
import { useSelector } from 'react-redux';

export default function Products() {
    const { products } = useSelector(state => state.products)
    return (
        <Box w="100%" color="gray.600" >
            <Box p={6} textAlign={'center'} border={'none'} >
                <Flex justifyContent={'center'} flexDirection={'row'}>
                    <Heading >Showing All Products...</Heading>
                    <Filters />
                </Flex>
            </Box>
            <Flex justifyContent={'center'} flexWrap={'wrap'} >
                {products.map(product => <Link to={`/shop/${product._id}`} as={lee} ><ProductCard data={product} /></Link>)}
            </Flex>
        </Box >
    );
}