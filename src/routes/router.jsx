import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Admin from './Admin.jsx'
import StartPage from './StartPage.jsx';
import LandingPage from './LandingPage.jsx'

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
				path: '/admin',
				element: <Admin />
			},
			{
				path: '/startpage',
				element: <StartPage />
			},
			{
				path: '/',
				element: <LandingPage />
			}
		]
	},

]);

export { router }
