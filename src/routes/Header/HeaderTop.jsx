import Logo from './Logo.svg'
import Basket from './Vector.svg'
import SideCart from './SideCart/SideCart'
import {useState} from 'react'
import {useStore} from '../../data/store'

function HeaderTop(){
    const [isActive, setIsActive] = useState(false);
    const totalQuantity = useStore(state => state.cartItems.reduce((total, item) => total + item.quantity, 0));

    const toggleCart = () => {
        setIsActive(!isActive);
    }

    const closeCart = () => {
        setIsActive(false);  
    };

    return(
        <>
        <section className="header-top-container">
            <div>
                <img src={Logo} alt="Logo" className='Logo' />
            </div>
            <div onClick={toggleCart}>
            <div className="basket-container" onClick={toggleCart}>
                <img src={Basket} alt="Basket" className='Basket' />
                <span className='quantity'>{totalQuantity}</span>
            </div>
            </div>
        </section>
        <SideCart
        isActive={isActive}
        closeCart={closeCart}/>
        </>
    )
}

export default HeaderTop