import {getProduct} from '../../config/crud.js'
import {useStore} from '../../data/store.js'
import ProductCard from './ProductCard.jsx'
import { useEffect, useState } from 'react';
import {NavLink, Outlet} from "react-router-dom"



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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard product={product} key={product.key} />
                    ))
                ) : (
                    <div className='no-product-container'>
                        <h3 className="no-products">Tyvärr, vi kunde inte hitta någon produkt som matchar din sökning!</h3>
                        <h3 className="no-products">Logga in som Admin och lägg till din önskade produkt!</h3>
                        <NavLink to="/admin"><button className='no-products-btn'>Logga in</button></NavLink>
                        
                    </div>
                    
                )}
            </section>
        </div>
    );
}



export default StartPage
