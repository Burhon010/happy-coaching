import { Link } from 'react-router-dom'
import { Sparkle } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './icons'

const PAGE_LINKS = [
	{ label: 'Home', to: '/' },
	{ label: 'Services', to: '/services' },
	{ label: 'About us', to: '/about' },
	{ label: 'Extra Sales/Landingpage', to: '/self-esteem-therapy' },
	{ label: 'Free guide', to: '/free-guide' }
]

const CONTACT_LINKS = [
	{ label: '+123 456 789', href: 'tel:+123456789' },
	{ label: 'hello@happycoaching.com', href: 'mailto:hello@happycoaching.com' },
	{ label: 'Instagram', href: '#' },
	{ label: 'LinkedIn', href: '#' }
]

const SOCIALS = [
	{ label: 'Instagram', icon: InstagramIcon, href: '#' },
	{ label: 'Facebook', icon: FacebookIcon, href: '#' },
	{ label: 'LinkedIn', icon: LinkedinIcon, href: '#' }
]

export function Footer() {
	return (
		<footer className='bg-white pt-16 pb-8'>
			<Container>
				<div className='grid grid-cols-1 gap-12 border-b border-gray-100 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]'>
					<div className='flex flex-col gap-4'>
						<Link to='/' className='flex items-center gap-2.5'>
							<span className='flex size-9 items-center justify-center rounded-full bg-accent text-white'>
								<Sparkle className='size-4' />
							</span>
							<span className='text-lg font-bold text-ink'>Happy Coaching</span>
						</Link>
						<p className='max-w-xs text-sm leading-relaxed text-body'>
							Design amazing digital experiences that create more happy in the world.
						</p>
					</div>

					<div>
						<h4 className='text-sm font-bold text-ink'>Pages</h4>
						<ul className='mt-4 flex flex-col gap-3'>
							{PAGE_LINKS.map((link) => (
								<li key={link.to}>
									<Link to={link.to} className='text-sm text-body transition-colors hover:text-accent'>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className='text-sm font-bold text-ink'>Contact</h4>
						<ul className='mt-4 flex flex-col gap-3'>
							{CONTACT_LINKS.map((link) => (
								<li key={link.label}>
									<a href={link.href} className='text-sm text-body transition-colors hover:text-accent'>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row'>
					<p className='text-xs text-body'>Made with ♥ by HappyDigital</p>
					<div className='flex items-center gap-3'>
						{SOCIALS.map((social) => (
							<a
								key={social.label}
								href={social.href}
								aria-label={social.label}
								className='flex size-9 items-center justify-center rounded-full bg-sand text-ink transition-colors hover:bg-accent hover:text-white'
							>
								<social.icon className='size-4' />
							</a>
						))}
					</div>
				</div>
			</Container>
		</footer>
	)
}
