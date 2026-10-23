// Decorative teal zigzag line used around hero photos and section corners.
export function Zigzag({ className = '' }) {
	return (
		<svg
			viewBox='0 0 120 40'
			fill='none'
			className={className}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M2 38 L22 8 L42 38 L62 8 L82 38 L102 8 L118 32'
				stroke='var(--color-accent)'
				strokeWidth='5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
