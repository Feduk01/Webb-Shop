import {useStore} from '../../data/store'
import { useState } from 'react'
import { addProduct, getProduct} from '../../config/crud'

function AddForm(){
    const {products, setProducts} = useStore(state => ({
        products: state.products,
        setProducts: state.setProducts,
        
   }))

    const[name, setName]= useState('')
    const[category, setCategory]= useState('')
    const[price, setPrice]= useState('')
    const[image, setImage]= useState('')

    function handleImageChange(e) {
        const file = e.target.files[0]
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl);
    }

    function handleImageUrlChange(e) {
        setImage(e.target.value);
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newProduct = {name: name, category: category, price: price, image: image
        }
        
        await addProduct(newProduct)
        setName('')
        setCategory('')
        setPrice('')
        setImage('')
        setProducts(await getProduct())
        console.log(newProduct);
    }

    return(
        <div className="form-container">
             <div className="form-column2">
            <input className="add-img" type='file'  onChange={handleImageChange}/>
            <input type="text" placeholder="Image URL" value={image} onChange={handleImageUrlChange} />
                <button type='submit' onClick={handleSubmit}>Add Product</button>
            </div>
            <div className="form-column">
                <input type="text" placeholder="Title" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)}  />
                <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)}/>
            </div>
        </div>
    )
}

export default AddForm