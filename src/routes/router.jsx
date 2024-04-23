import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Admin from './Admin.jsx'

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
			}
		]
	},

]);

export { router }
