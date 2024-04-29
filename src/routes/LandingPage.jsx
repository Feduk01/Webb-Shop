import {NavLink, Outlet} from "react-router-dom"
import Header from "./Header/Header.jsx"
import StartPage from './Products/StartPage.jsx'

function LandingPage(){
	return(
		<div className='container'>
			<div className="wrapper">
			<Header/>
				<nav>
					<NavLink to="/admin"> Gå till Admin </NavLink>
			    </nav>
				<StartPage />
			</div>
		</div>

	)
}

export default LandingPage