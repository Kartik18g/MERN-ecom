import {
    FormControl,
    Input,
    FormHelperText,
    FormLabel,
    Box,
    Select,
    Heading,
    Button
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../actions/product'


const AddProduct = () => {

    const [name, setname] = useState('')
    const [imageUrl, setimageUrl] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const [color, setcolor] = useState('')
    const [listingPrice, setlistingPrice] = useState('')
    const [actualPrice, setactualPrice] = useState('')
    const [stock, setstock] = useState(0)

    const dispatch = useDispatch()

    const handleAddProduct = () => {
        dispatch(addProduct({
            name, imageUrl, description, category, color, listingPrice, actualPrice, stock
        }))
    }

    return (
        <Box m={4}>
            <Heading>Add Product</Heading>
            <FormControl>
                <FormLabel>Product name</FormLabel>
                <Input onChange={(e) => { setname(e.target.value) }} type="text" />
                <FormLabel>Image URL </FormLabel>
                <Input onChange={(e) => { setimageUrl(e.target.value) }} type="text" />
                <FormLabel>Product description</FormLabel>
                <Input onChange={(e) => { setdescription(e.target.value) }} type="text" />
                <FormLabel>Category</FormLabel>
                <Select onChange={(e) => { setcategory(e.target.value) }} placeholder="Select product's category">
                    <option>Watch Band</option>
                    <option>iPhone Cases</option>
                </Select>
                <FormLabel>Product color</FormLabel>
                <Input onChange={(e) => { setcolor(e.target.value) }} type="text" />
                <FormLabel> Actual Price</FormLabel>
                <Input onChange={(e) => { setactualPrice(e.target.value) }} type="number" />
                <FormLabel> Listing Price</FormLabel>
                <Input onChange={(e) => { setlistingPrice(e.target.value) }} type="number" />
                <FormLabel> Stock</FormLabel>
                <Input onChange={(e) => { setstock(e.target.value) }} type="number" />
                <Button onClick={handleAddProduct} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
    );
}

export default AddProduct;