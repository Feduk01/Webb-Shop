import './admin.css'
import {NavLink} from "react-router-dom"

const Admin = () => (
	<div className='admin-page-container'>
       
        <section className="login-container">
            <div className='top-corner'>
            <button><NavLink to="/">back</NavLink></button>
            </div>
            <div className='row1'>
                <label htmlFor="1">Username</label>
                <input id='1' type="text" />
            </div>
            <div className='row2'>
                <label htmlFor="2">Password</label>
                <input id='2' type="password" />
            </div>
            <button><NavLink to="/product-edit">Login</NavLink></button>
        </section>
    </div>
)

export default Admin