import '../Products/product.css'
import Close from '../../../public/close.svg'
import {deleteProduct, getProduct} from '../../config/crud.js'
import {useStore} from '../../data/store.js'

function EditProductCard({product}) {

    const {products, setProducts} = useStore(state => ({
        products: state.products,
        setProducts: state.setProducts
   }))

   const handleDelete = async () => {
    await deleteProduct(product.key)
    const producDb = await getProduct()
    setProducts(producDb)
    console.log(deleteProduct);
   }


   
    return(
        <section className="product-card-container">
            <button className='close' onClick={handleDelete}>
                <img src={Close} alt="close"  />
            </button>
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>
            <div className="product-bot-part-container">
                <div className="product-information-container">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}:-</p>
                </div>
                <button className="product-btn">Köp</button>
            </div>
        </section>
    )
}

export default EditProductCard