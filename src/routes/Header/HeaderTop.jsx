import Logo from './Logo.svg'
import Basket from './Vector.svg'

function HeaderTop(){
    return(
        <section className="header-top-container">
            <div>
                <img src={Logo} alt="Logo" className='Logo' />
            </div>
            <div>
            <img src={Basket} alt="Basket" className='Basket' />
            </div>
        </section>
    )
}

export default HeaderTop