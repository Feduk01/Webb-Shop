import './product.css'
import { useStore } from '../../data/store.js'


function ProductCard({product}) {
    const addProductToCart = useStore(state => state.addProductToCart)

    const handleAddToCart = () => {
        addProductToCart(product)
    }

   
    return(
        <section className="product-card-container">
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>
            <div className="product-bot-part-container">
                <div className="product-information-container">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}:-</p>
                </div>
                <button className="product-btn" onClick={handleAddToCart}>Köp</button>
            </div>
        </section>
    )
}

export default ProductCard