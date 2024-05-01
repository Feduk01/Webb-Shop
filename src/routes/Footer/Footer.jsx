import FooterBack from './footerbackground.svg'
import './footer.css'
import {adress} from './adress.js'

function Footer() {
    
    return (
    <div className='footer-container'>
        <div className="left-side">
            <h3>{adress.company}</h3>
            <h3>{adress.email}</h3>
            <h3>{adress.phone}</h3>
        </div>
        <div className="right-side">
            <h3>{adress.street}</h3>
            <h3>{adress.city}</h3>
            <h3>{adress.country}</h3>
        </div>
    </div>
    )
}


export default Footer