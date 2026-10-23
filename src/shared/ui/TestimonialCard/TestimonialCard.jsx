import { Rating } from '@/shared/ui/Rating'

// Renders `**word**` markers in testimonial copy as bold accent text.
function renderText(text) {
	const parts = text.split(/\*\*(.+?)\*\*/g)
	return parts.map((part, i) =>
		i % 2 === 1 ? (
			<strong key={i} className='font-semibold text-ink'>
				{part}
			</strong>
		) : (
			part
		)
	)
}

export function TestimonialCard({ testimonial, className = '' }) {
	return (
		<article
			className={`flex h-full flex-col gap-5 rounded-3xl bg-white p-7 shadow-[0_20px_40px_-20px_rgba(30,30,90,0.15)] ${className}`}
		>
			<Rating value={testimonial.rating} />
			<p className='flex-1 text-sm leading-relaxed text-body'>{renderText(testimonial.text)}</p>
			<div className='flex items-center gap-3 border-t border-gray-100 pt-5'>
				<img
					src={testimonial.avatar}
					alt={testimonial.name}
					className='size-11 rounded-full object-cover'
					loading='lazy'
				/>
				<div>
					<p className='text-sm font-semibold text-ink'>{testimonial.name}</p>
					<p className='text-xs text-body'>{testimonial.role}</p>
				</div>
			</div>
		</article>
	)
}
