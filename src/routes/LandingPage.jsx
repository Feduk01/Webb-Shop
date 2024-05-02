import {NavLink, Outlet} from "react-router-dom"
import Header from "./Header/Header.jsx"
import StartPage from './Products/StartPage.jsx'
import Footer from './Footer/Footer.jsx'

function LandingPage(){
	return(
		<div className='container'>
			<div className="wrapper">
			<Header/>
			<StartPage />
			<Footer />
			</div>
		</div>

	)
}

export default LandingPage