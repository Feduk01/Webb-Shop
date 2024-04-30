import {getProduct} from '../../config/crud.js'
import {useStore} from '../../data/store.js'
import ProductCard from './ProductCard.jsx'
import { useEffect, useState } from 'react';


const StartPage = (selectedCategory) => {
    
   const {products, setProducts} = useStore(state => ({
        products: state.products,
        setProducts: state.setProducts
   }))

   
   useEffect(() => {
    const fetchProducts = async () => {
        const loadedProducts = await getProduct();
        setProducts(loadedProducts);
    };

    fetchProducts();
}, []);

const filteredProducts = products.filter(product => product.category === selectedCategory )
    

    return(
        <div>
            <section className='product-list'>
                {products.map(product=> (
                    <ProductCard product={product} key={product.key}/>
                ))}

            </section>
        </div>

    )
}



export default StartPage
