// lucide-react dropped brand/social icons — simple inline SVGs instead.

export function InstagramIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' {...props}>
			<rect x='3.5' y='3.5' width='17' height='17' rx='5' />
			<circle cx='12' cy='12' r='4' />
			<circle cx='17' cy='7' r='1' fill='currentColor' stroke='none' />
		</svg>
	)
}

export function FacebookIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' {...props}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M14 21v-7h2.5l.5-3.3h-3V8.6c0-1 .3-1.7 1.8-1.7H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.6H7.8V14h2.5v7'
			/>
		</svg>
	)
}

export function LinkedinIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' {...props}>
			<rect x='3.5' y='3.5' width='17' height='17' rx='3' />
			<path strokeLinecap='round' d='M7.8 10v6.5M7.8 7.3v.1' />
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M11.5 16.5V10m0 0c0-1 1-2.3 2.5-2.3S16.5 9 16.5 10.5v6'
			/>
		</svg>
	)
}
