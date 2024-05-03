import cardClose from './cardClose.svg'
import {useStore} from '../../../data/store.js'
import './sideCart.css'
import SideCartItem from './sideCartItem'

function SideCart({isActive, closeCart}){
    const {cartItems, clearCart} = useStore(state => ({
        cartItems: state.cartItems,
        clearCart: state.clearCart,
    }));

    const cartClass = isActive ? "card active " : "card"
    const overlayClass = isActive ? "overlay active" : "overlay"; 
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)   


    return(
        <>
        <div className={overlayClass} onClick={closeCart}></div>
        <section className={cartClass}>

            <div className="card-top">
                <h2 className="card-rubric">Varukorg</h2>
                <button className='closeShopping' onClick={closeCart}>
                    <img src={cardClose} alt="" />
                </button>
            </div>

            <div className='card-mid'>
                <ul className="listCard">
                    {cartItems.map(item => (
                        <SideCartItem key={item.key} item={item} /> 
                        ))}
                </ul>
                <button className='remove' onClick={clearCart} >Töm varukorg</button>
            </div>

            <div className="checkout">
                <p className='total'>Att betala: {total}</p>
                <button className='kassa-btn'>Till Kassan</button>
            </div>

        </section>
        </>
    )
}

export default SideCart 