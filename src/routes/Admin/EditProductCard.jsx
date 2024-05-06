import '../Products/product.css'
import Close from '../../../public/close.svg'
import {deleteProduct, getProduct, editProduct} from '../../config/crud.js'
import {useStore} from '../../data/store.js'
import {useState} from 'react'

function EditProductCard({product, }) {

    const [isEditMode, setIsEditMode] = useState(false)
    const [editName, setEditName] = useState(product.name)
    const [editCategory, setEditCategory] = useState(product.category)
    const [editPrice, setEditPrice] = useState(product.price)
    const [editImage, setEditImage] = useState(product.image)

    const {products, setProducts} = useStore(state => ({
        products: state.products,
        setProducts: state.setProducts
   }))

   const handleDelete = async () => {
    await deleteProduct(product.key)
    const producDb = await getProduct()
    setProducts(producDb)
   }

   const handleEdit = async () => {
    const updatedProduct = {
        key: product.key,
        name: editName,
        category: editCategory,
        price: editPrice, 
        image: editImage
    }
    await editProduct(product.key, updatedProduct)
    const producDb = await getProduct()
    setProducts(producDb)
    setIsEditMode(false)
   }

   function handleImageUrlChange(e) {
    setEditImage(e.target.value);
}

   
    return(
        <>
            {isEditMode ? (
                <>
                <section className="product-card-container edit-container">
                    <button className='close' onClick={handleDelete}>
                        <img src={Close} alt="close"  />
                    </button>
                    <div className="product-img">
                        <input type="text" placeholder="Image URL" className="edit-values"  onChange={handleImageUrlChange} />
                    </div>
                   
                        <div className="product-information-container center">
                            <input type="text" placeholder='Enter name' className="product-name edit-values" onChange={(e) => setEditName(e.target.value)} />
                            <input type="text" placeholder='Enter price' className="product-name edit-values" onChange={(e) => setEditPrice(e.target.value)} />
                            <input type="text" placeholder='Enter category' className="product-name edit-values" onChange={(e) => setEditCategory(e.target.value)} />
                        </div>
                        <button className="product-btn" onClick={handleEdit}>Save</button>
                    
                </section>
                </>
            ) : (
                <>
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
                        <button className="product-btn" onClick={() => setIsEditMode(true)}>Edit</button>
                    </div>
                </section>
                </>
            )}
            
            
        </>
       
    )
}

export default EditProductCard