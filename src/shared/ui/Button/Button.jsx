import { Link } from 'react-router-dom'

const VARIANTS = {
	solid: 'bg-accent text-white hover:bg-accent-dark',
	outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
	'outline-light': 'border border-white/60 text-white hover:bg-white hover:text-ink',
	ghost: 'text-ink hover:text-accent'
}

export function Button({
	as,
	to,
	href,
	variant = 'solid',
	className = '',
	children,
	...props
}) {
	const base = `inline-flex w-fit items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${VARIANTS[variant]} ${className}`

	if (to) {
		return (
			<Link to={to} className={base} {...props}>
				{children}
			</Link>
		)
	}

	if (href) {
		return (
			<a href={href} className={base} {...props}>
				{children}
			</a>
		)
	}

	const Comp = as || 'button'
	return (
		<Comp type={Comp === 'button' ? 'button' : undefined} className={base} {...props}>
			{children}
		</Comp>
	)
}
