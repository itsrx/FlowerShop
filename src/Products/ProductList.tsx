import { TrendingDown } from '@mui/icons-material'
import React, { useState } from 'react'
import { isInterfaceDeclaration } from 'typescript'

interface ProductsListsProps {

}

const initialProducts = [
    {title: "Succulent", price: 5, id: 'bud'},
    {title: "Cactus", price: 8, id: 'point'},
    {title: 'Rose Plant', price: 15, id: 'rosy'}
]

interface Product {
    title: string;
    price: number;
    id: string;
}

const ProductsList: React.FC<ProductsListsProps> = ({}) => {
    
    const [products, setProducts] = useState(initialProducts)

    return (
        <div>
            <h2>Plant List</h2>
            {products.map(product => <div key={product.id}> 
                <span>{`${product.title}: ${product.price}`}</span>
            </div>)}

            <button onClick={() => setProducts(prevProducts => [{
                title: 'sunflower',
                price: 10,
                id: 'sun'
            }, ...prevProducts])}>Add Product</button>
        </div>
    )
}

export default ProductsList