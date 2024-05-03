import Logo from './Logo.svg'
import Basket from './Vector.svg'
import SideCart from './SideCart/SideCart'
import {useState} from 'react'

function HeaderTop(){
    const [isActive, setIsActive] = useState(false);

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
            <img src={Basket} alt="Basket" className='Basket' />
            </div>
        </section>
        <SideCart
        isActive={isActive}
        closeCart={closeCart}/>
        </>
    )
}

export default HeaderTop