import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button, ButtonGroup,
    Stack
} from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { deleteProduct } from '../../actions/product'
import { useDispatch } from 'react-redux'


const ProductsTable = () => {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()


    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId))
    }

    return (
        <Table variant="simple">
            <TableCaption>All Products</TableCaption>
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th >Category</Th>
                    <Th >Actual Price</Th>
                    <Th >Listing Price</Th>
                    <Th >Color</Th>
                    <Th isNumeric >Stock</Th>
                </Tr>
            </Thead>
            <Tbody>
                {products.map(product => <>
                    <Tr>
                        <Td>{product && product.id}</Td>
                        <Td>{product && product.productName}</Td>
                        <Td>{product && product.category}</Td>
                        <Td>{product && product.actualPrice}</Td>
                        <Td>{product && product.listingPrice}</Td>
                        <Td>{product && product.color}</Td>
                        <Td color={product && product.stock < 10 ? "red" : "green.400"} isNumeric>{product && product.stock}</Td>
                        <Td >
                            <Stack direction="row" spacing={4} align="center">
                                <Button onClick={() => { handleDelete(product.id) }} colorScheme="red" variant="solid">
                                    Delete
                                </Button>
                                <Button colorScheme="purple" variant="solid">
                                    Edit
                                </Button>

                            </Stack>
                        </Td>
                    </Tr>
                </>
                )}

            </Tbody>

        </Table>
    );
}

export default ProductsTable;