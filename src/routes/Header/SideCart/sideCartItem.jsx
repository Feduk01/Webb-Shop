import './sideCart.css'
import cardClose from '../../../../public/cardClose.svg'
import {useStore} from '../../../data/store'

function SideCartItem({item}) {
    const {removeProductFromCart, incrementProductQuantity, decrementProductQuantity } = useStore(state => ({
        removeProductFromCart: state.removeProductFromCart,
        incrementProductQuantity: state.incrementProductQuantity,
        decrementProductQuantity: state.decrementProductQuantity 
    }))

    const handleIncrement = () => {
        incrementProductQuantity(item.key);
    }

    const handleDecrement = () => {
        if (item.quantity > 1) {
            decrementProductQuantity(item.key);
        } else {
            removeProductFromCart(item.key);
        }
    }

    const handleRemove = () => {
        removeProductFromCart(item.key);
    }

    return (
        <li className="card-item">
                        <button className="remove-item" onClick={handleRemove}  >
                            <img src={cardClose} alt="" />
                        </button>
                        <div className="item-info">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                        </div>

                        <div className="value-container">
                            <button className='reduceValue' onClick={handleDecrement}>-</button>
                            <div className="value">{item.quantity}</div>
                            <button className='addValue'onClick={handleIncrement}>+</button>
                        </div>

                        <div className="summa">
                            <div className="item-price">
                                <div>A-pris</div>
                                <div>{item.price}</div>
                            </div>
                            <div className="total-item-price">
                                <div>Summa</div>
                                <div>{item.price * item.quantity} kr</div>
                            </div>
                        </div>
                        
                    </li>
    )
}

export default SideCartItem