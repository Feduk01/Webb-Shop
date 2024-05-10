import '../Products/product.css';
import Close from '../../../public/close.svg';
import { deleteProduct, getProduct, editProduct } from '../../config/crud.js';
import { useStore } from '../../data/store.js';
import { useState } from 'react';

function EditProductCard({ product }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editName, setEditName] = useState(product.name);
    const [editCategory, setEditCategory] = useState(product.category);
    const [editPrice, setEditPrice] = useState(product.price);
    const [editImage, setEditImage] = useState(product.image);

    const { setProducts } = useStore(state => ({
        setProducts: state.setProducts,
    }));

    // Validation messages
    const [nameError, setNameError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [imageError, setImageError] = useState('');

    // Track touched fields
    const [touched, setTouched] = useState({
        name: false,
        category: false,
        price: false,
        image: false,
    });

    const handleDelete = async () => {
        await deleteProduct(product.key);
        const producDb = await getProduct();
        setProducts(producDb);
    };

    const handleEdit = async () => {
        validateFields();
        if (editName && editCategory && editPrice && editImage) {
            const updatedProduct = {
                key: product.key,
                name: editName,
                category: editCategory,
                price: editPrice,
                image: editImage,
            };
            await editProduct(product.key, updatedProduct);
            const producDb = await getProduct();
            setProducts(producDb);
            setIsEditMode(false);
        }
    };

    function validateFields() {
        setNameError(!editName ? 'Skriv in produktens namn' : '');
        setCategoryError(!editCategory ? 'Skriv in produktens kategori' : '');
        setPriceError(!editPrice ? 'Skriv in produktens pris' : '');
        setImageError(!editImage ? 'Skriv in bildens URL' : '');
    }

    function handleBlur(field) {
        setTouched({ ...touched, [field]: true });
        validateFields();
    }

    const isButtonDisabled = !editName || !editCategory || !editPrice || !editImage;

    return (
        <>
            {isEditMode ? (
                <section className="product-card-container edit-container">
                    <button className="close" onClick={handleDelete}>
                        <img src={Close} alt="close" />
                    </button>
                    <div className="product-img">
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="edit-values"
                            value={editImage}
                            onChange={(e) => setEditImage(e.target.value)}
                            onBlur={() => handleBlur('image')}
                        />
                        {touched.image && imageError && <div className="error">{imageError}</div>}
                    </div>
                    <div className="product-information-container center">
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="product-name edit-values"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            onBlur={() => handleBlur('name')}
                        />
                        {touched.name && nameError && <div className="error">{nameError}</div>}
                        <input
                            type="text"
                            placeholder="Enter price"
                            className="product-name edit-values"
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                            onBlur={() => handleBlur('price')}
                        />
                        {touched.price && priceError && <div className="error">{priceError}</div>}
                        <input
                            type="text"
                            placeholder="Enter category"
                            className="product-name edit-values"
                            value={editCategory}
                            onChange={(e) => setEditCategory(e.target.value)}
                            onBlur={() => handleBlur('category')}
                        />
                        {touched.category && categoryError && <div classname="error">{categoryError}</div>}
                    </div>
                    <button className="product-btn" onClick={handleEdit} disabled={isButtonDisabled}>
                        Save
                    </button>
                </section>
            ) : (
                <section className="product-card-container">
                    <button className="close" onClick={handleDelete}>
                        <img src={Close} alt="close" />
                    </button>
                    <div className="product-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-bot-part-container">
                        <div className="product-information-container">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price}:-</p>
                        </div>
                        <button className="product-btn" onClick={() => setIsEditMode(true)}>
                            Edit
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}

export default EditProductCard;
