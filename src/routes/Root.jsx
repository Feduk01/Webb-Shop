import {NavLink, Outlet} from "react-router-dom"

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<h1> Header</h1>
			<nav>
				<NavLink to="/"> Start </NavLink>
				<NavLink to="/admin"> Gå till Admin </NavLink>
			</nav>
		</header>

		<main>
			<Outlet />
		</main>
	</div>
)

export default Root
