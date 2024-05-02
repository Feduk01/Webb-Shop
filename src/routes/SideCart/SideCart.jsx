import cardClose from './cardClose.svg'
import './sideCart.css'
function SideCart(){

    return(
        <section className="card">

            <div className="card-top">
                <h2 className="card-rubric">Varukorg</h2>
                <button className='closeShopping'>
                    <img src={cardClose} alt="" />
                </button>
            </div>

            <div className='card-mid'>
                <ul className="listCard">lista</ul>
                <button className='remove'>Töm varukorg</button>
            </div>

            <div className="checkout">
                <p className='total'>Att betala: 200kr</p>
                <button className='kassa-btn'>Till Kassan</button>
            </div>

        </section>
    )
}

export default SideCart 