import { Link } from 'react-router-dom'
import { Sparkle } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './icons'

const PAGE_LINKS = [
	{ label: 'Home', to: '/' },
	{ label: 'Services', to: '/services' },
	{ label: 'Free Guide', to: '/free-guide' },
	{ label: 'About me', to: '/about' },
	{ label: 'Self Esteem Therapy', to: '/self-esteem-therapy' }
]

const CONTACT_LINKS = [
	{ label: 'hello@happycoaching.com', href: 'mailto:hello@happycoaching.com' },
	{ label: '+1 (555) 234-0192', href: 'tel:+15552340192' },
	{ label: 'Book a free session', to: '/#book' }
]

const CURRENT_YEAR = new Date().getFullYear()

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
							Helping you live life at full potential, one honest conversation at a time.
						</p>
					</div>

					<div>
						<h4 className='text-sm font-bold tracking-wide text-ink uppercase'>Pages</h4>
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
						<h4 className='text-sm font-bold tracking-wide text-ink uppercase'>Contact</h4>
						<ul className='mt-4 flex flex-col gap-3'>
							{CONTACT_LINKS.map((link) =>
								link.to ? (
									<li key={link.label}>
										<Link to={link.to} className='text-sm text-body transition-colors hover:text-accent'>
											{link.label}
										</Link>
									</li>
								) : (
									<li key={link.label}>
										<a href={link.href} className='text-sm text-body transition-colors hover:text-accent'>
											{link.label}
										</a>
									</li>
								)
							)}
						</ul>
					</div>
				</div>

				<div className='flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row'>
					<p className='text-xs text-body'>© {CURRENT_YEAR} Happy Coaching. All rights reserved.</p>
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
