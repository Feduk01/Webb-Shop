import { useState } from 'react';
import { useStore } from '../../data/store';
import { addProduct, getProduct } from '../../config/crud';

function AddForm() {
    const { setProducts } = useStore(state => ({
        setProducts: state.setProducts,
    }));


    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')


    const [nameError, setNameError] = useState('')
    const [categoryError, setCategoryError] = useState('')
    const [priceError, setPriceError] = useState('')
    const [imageError, setImageError] = useState('')

  
    const [touched, setTouched] = useState({
        name: false,
        category: false,
        price: false,
        image: false,
    })

    // Validation function
    function validateFields() {
        setNameError(!name ? 'Skriv in produktens namn' : '')
        setCategoryError(!category ? 'Skriv in produktens kategori' : '')
        setPriceError(!price ? 'Skriv in produktens pris' : '')
        setImageError(!image ? 'Skriv in bildens URL' : '')
    }


    function handleBlur(field) {
        setTouched({ ...touched, [field]: true })
        validateFields()
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        validateFields()
      
        if (name && category && price && image) {
            const newProduct = { name, category, price, image }
            await addProduct(newProduct)
            setName('')
            setCategory('')
            setPrice('')
            setImage('')
            setProducts(await getProduct())
        }
    }


    const isButtonDisabled = !name || !category || !price || !image;

    return (
        <div className="form-container">
            <div className="form-column2">
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    onBlur={() => handleBlur('image')}
                />
                {touched.image && imageError && <div className="error">{imageError}</div>}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                >
                    Add Product
                </button>
            </div>
            <div className="form-column">
                <input
                    type="text"
                    placeholder="Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => handleBlur('name')}
                />
                {touched.name && nameError && <div className="error">{nameError}</div>}
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    onBlur={() => handleBlur('category')}
                />
                {touched.category && categoryError && <div className="error">{categoryError}</div>}
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={() => handleBlur('price')}
                />
                {touched.price && priceError && <div className="error">{priceError}</div>}
            </div>
        </div>
    );
}

export default AddForm;
