/*
Product :
    imageUrl,
    productName,
    description,
    actualPrice,
    listingPrice
    category:"WHATVER THE CATEGORY IS",
    compatibleWith,
    color
*/

const initialState = {
    products: [
        {
            id: 1,
            productName: 'Watch Band',
            description: "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
            actualPrice: "$50",
            listingPrice: "$39",
            // TODO use id 
            category: "Watch band",
            compatibleWith: "Apple Watch 38mm, 40mm, 41mm",
            color: 'Pomegrenate',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/Red-Fusion-38-40_1024x1024.jpg?v=1611006835',
            stock: 10,
        }, {
            id: 2,
            productName: 'Watch Band',
            description: "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
            actualPrice: "$50",
            listingPrice: "$39",
            // TODO use id 
            category: "Watch band",
            compatibleWith: "Apple Watch 42mm, 44mm, 45mm",
            color: 'Orange',
            stock: 119,
            imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/Pomegranate-40_1024x1024.jpg?v=1620410372',
        }
        , {
            id: 3,
            productName: 'Watch Band',
            description: "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
            actualPrice: "$50",
            listingPrice: "$39",
            // TODO use id 
            category: "Watch band",
            compatibleWith: "Apple Watch 42mm, 44mm, 45mm",
            color: 'Blue',
            stock: 8,

            imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/Sport_Loop-Midnight-40_1024x1024.jpg?v=1620410372'
        }
        , {
            id: 4,
            productName: 'Iphone 12 Case',
            description: "Toned up for aesthetically pleasing design. Soft coated silicone on the outside, and microfiber lining on the inside..",
            stock: 29,

            actualPrice: "$40",
            listingPrice: "$39",
            // TODO use id 
            category: "iPhone Case",
            compatibleWith: "iPhone 12",
            color: 'Black',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/12-Sunflower_1024x1024.jpg?v=1630739597'
        }
        , {
            id: 5,
            productName: 'Iphone 12 Case',
            description: "Toned up for aesthetically pleasing design. Soft coated silicone on the outside, and microfiber lining on the inside..",
            stock: 5,
            actualPrice: "$40",
            listingPrice: "$39",
            // TODO use id 
            category: "iPhone Case",
            compatibleWith: "iPhone 12",
            color: 'Orange',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0984/6842/products/12-Mystery-Flame_1024x1024.jpg?v=1606412986'
        }
    ]
}
const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'DELETE_PRODUCT':
            const { productId } = payload
            return {
                products: state.products.filter(prod => prod.id !== productId)
            }
        case 'ADD_PRODUCT':
            const { product } = payload
            return {
                products: [...state.products, product]
            }
        case 'GET_PRODUCTS':
            const { products } = payload
            return {
                products: [...products]
            }
        default:
            return state
    }

}


export default productsReducer