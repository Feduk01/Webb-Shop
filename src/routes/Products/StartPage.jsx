import {getProduct} from '../../config/crud.js'
import {useStore} from '../../data/store.js'
import ProductCard from './ProductCard.jsx'
import { useEffect, useState } from 'react';


const StartPage = () => {
    
   const {products, setProducts, selectedCategory, selectedFilter, searchedProduct} = useStore(state => ({
        products: state.products,
        setProducts: state.setProducts,
        selectedCategory: state.selectedCategory,
        selectedFilter: state.selectedFilter,
        searchedProduct: state.searchedProduct
   }))

   
   useEffect(() => {
    const fetchProducts = async () => {
        const loadedProducts = await getProduct();
        setProducts(loadedProducts);
    };

    fetchProducts();
    }, 
    [setProducts]);

    let filteredProducts = products
        .filter(product => !selectedCategory || product.category === selectedCategory)
        .filter(product => product.name.toLowerCase().includes(searchedProduct.toLowerCase()))

    if (selectedFilter === 'Price') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedFilter === 'Alphabet') {
        filteredProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    
    
    return(
        <div>
            <section className='product-list'>
                {filteredProducts.map(product=> (
                    <ProductCard product={product} key={product.key}/>
                ))}

            </section>
        </div>

    )
}



export default StartPage
