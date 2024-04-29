import {getProduct} from '../../config/crud.js'
import {useStore} from '../../data/store.js'
import EditProductCard from './EditProductCard.jsx'
import { useEffect } from 'react';
import AddForm from './AddForm.jsx'

function EditProducts(){
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

    return(
        <div className="edit-product-page-container">
            <section className="edit-product-container">
                <AddForm />
                {products.map(product=> (
                    <EditProductCard product={product} key={product.key}/>
                ))}

            </section>
            
        </div>
    )
}

export default EditProducts