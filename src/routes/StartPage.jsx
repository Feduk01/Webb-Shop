import {getProduct} from '../config/crud.js'
import {useStore} from '../data/store.js'

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
            <h2>
                Our Products
            </h2> 

            <button onClick={handleGetProducts}>get product</button>
            {products.map(product=> (
                 <div >
                 <div>{product.name}</div>
                 <div>{product.category}</div>
                 <div>{product.price}</div>
                 <img src={product.image} alt="" />
             </div>
            ))}

        </div>

    )
}



export default StartPage
