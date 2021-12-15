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
import { addCategory } from '../../actions/category';


const AddCategory = () => {

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')


    const dispatch = useDispatch()

    const handleAddCategory = () => {
        console.log({
            name, description
        })
        dispatch(addCategory(name, description))
    }

    return (
        <Box m={4}>
            <Heading>Add Category</Heading>
            <FormControl>
                <FormLabel>Category name</FormLabel>
                <Input onChange={(e) => { setname(e.target.value) }} type="text" />
                <FormLabel>Category description</FormLabel>
                <Input onChange={(e) => { setdescription(e.target.value) }} type="text" />
                <Button onClick={handleAddCategory} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
    );
}

export default AddCategory;