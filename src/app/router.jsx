import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { HomePage } from '@/pages/home'
import { ServicesPage } from '@/pages/services'
import { FreeGuidePage } from '@/pages/free-guide'
import { AboutPage } from '@/pages/about'
import { SalesPage } from '@/pages/sales'
import { NotFoundPage } from '@/pages/not-found'

export const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/services', element: <ServicesPage /> },
			{ path: '/free-guide', element: <FreeGuidePage /> },
			{ path: '/about', element: <AboutPage /> },
			{ path: '/self-esteem-therapy', element: <SalesPage /> },
			{ path: '*', element: <NotFoundPage /> }
		]
	}
])
