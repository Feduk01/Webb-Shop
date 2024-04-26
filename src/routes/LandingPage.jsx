import {NavLink, Outlet} from "react-router-dom"
import Header from "./Header/Header.jsx"
import StartPage from './Products/StartPage.jsx'

function LandingPage(){
	return(
		<div className='container'>
			<div className="wrapper">
			<Header/>
				<nav>
					<NavLink to="/"> Start </NavLink>
					<NavLink to="/admin"> Gå till Admin </NavLink>
					<NavLink to="/startpage">Start Page</NavLink>
			    </nav>
				<StartPage />
			</div>
		</div>

	)
}

export default LandingPage