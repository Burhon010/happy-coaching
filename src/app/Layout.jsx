import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
	return (
		<div className='flex min-h-screen flex-col bg-white'>
			<ScrollToTop />
			<Header />
			<main className='flex-1'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
