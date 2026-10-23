import { Star } from 'lucide-react'

export function Rating({ value = 5, className = '' }) {
	return (
		<div className={`flex items-center gap-1 ${className}`} aria-label={`${value} из 5`}>
			{Array.from({ length: 5 }).map((_, i) => (
				<Star
					key={i}
					className={`size-4 ${i < value ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
				/>
			))}
		</div>
	)
}
