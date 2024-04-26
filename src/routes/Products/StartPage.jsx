import {getProduct} from '../../config/crud.js'
import {useStore} from '../../data/store.js'
import ProductCard from './ProductCard.jsx'

const StartPage = () => {
    
   const {products, setProducts} = useStore(state => ({
        products: state.products,
        setProducts: state.setProducts
   }))

   const handleGetProducts = async () => {
        setProducts(await getProduct())
   }


    return(
        <div>
            <button onClick={handleGetProducts}>get product</button>
            <section className='product-list'>
                {products.map(product=> (
                    <ProductCard product={product} key={product.id}/>
                ))}

            </section>
        </div>

    )
}



export default StartPage
