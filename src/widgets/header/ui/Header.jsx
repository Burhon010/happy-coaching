import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Sparkle } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'

const NAV_ITEMS = [
	{ label: 'Home', to: '/' },
	{ label: 'Services', to: '/services' },
	{ label: 'About us', to: '/about' },
	{ label: 'Extra Salespage', to: '/self-esteem-therapy' }
]

export function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header
			className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
				scrolled ? 'shadow-[0_8px_24px_-12px_rgba(30,30,90,0.18)]' : ''
			}`}
		>
			<Container className='flex items-center justify-between py-5'>
				<Link to='/' className='flex items-center gap-2.5' onClick={() => setMenuOpen(false)}>
					<span className='flex size-9 items-center justify-center rounded-full bg-accent text-white'>
						<Sparkle className='size-4' />
					</span>
					<span className='text-lg font-bold text-ink'>Happy Coaching</span>
				</Link>

				<nav className='hidden items-center gap-9 lg:flex'>
					{NAV_ITEMS.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								`text-sm font-semibold transition-colors ${
									isActive ? 'text-accent' : 'text-ink hover:text-accent'
								}`
							}
						>
							{item.label}
						</NavLink>
					))}
				</nav>

				<Button to='/free-guide' className='hidden lg:inline-flex'>
					Get your free guide now
				</Button>

				<button
					type='button'
					onClick={() => setMenuOpen((v) => !v)}
					className='text-ink lg:hidden'
					aria-label='Toggle menu'
				>
					{menuOpen ? <X className='size-6' /> : <Menu className='size-6' />}
				</button>
			</Container>

			{menuOpen && (
				<div className='border-t border-gray-100 bg-white px-5 pb-6 lg:hidden'>
					<nav className='flex flex-col gap-1 pt-4'>
						{NAV_ITEMS.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									`rounded-xl px-3 py-2.5 text-sm font-semibold ${
										isActive ? 'bg-accent-light text-accent' : 'text-ink hover:bg-sand'
									}`
								}
							>
								{item.label}
							</NavLink>
						))}
					</nav>
					<Button to='/free-guide' className='mt-4 w-full' onClick={() => setMenuOpen(false)}>
						Get your free guide now
					</Button>
				</div>
			)}
		</header>
	)
}
