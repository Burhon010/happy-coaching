import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { TestimonialCard } from '@/entities/testimonial'
import { Button } from '@/shared/ui/Button'

/**
 * Reused across Home (slider), Free Guide / Sales (2x2 grid) and About us
 * (3-up, staggered by height).
 */
export function TestimonialsSection({
	variant = 'slider',
	eyebrow,
	title = 'Hear out what my clients say about me.',
	align = 'center',
	items,
	ctaButton,
	background = 'sand'
}) {
	const [start, setStart] = useState(0)
	const bgClass = background === 'sand' ? 'bg-sand' : 'bg-white'

	if (variant === 'slider') {
		const visibleCount = 3
		const visible = Array.from({ length: Math.min(visibleCount, items.length) }, (_, i) => items[(start + i) % items.length])
		const next = () => setStart((s) => (s + 1) % items.length)
		const prev = () => setStart((s) => (s - 1 + items.length) % items.length)
		const rowAlign = align === 'left' ? 'items-start' : 'items-center'

		return (
			<section className={`py-20 sm:py-24 ${bgClass}`}>
				<Container className={`flex flex-col gap-12 ${rowAlign}`}>
					<SectionHeading eyebrow={eyebrow} title={title} align={align} />
					<div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{visible.map((t) => (
							<TestimonialCard key={t.id} testimonial={t} />
						))}
					</div>
					<div className='flex items-center gap-3'>
						<button
							type='button'
							onClick={prev}
							aria-label='Previous testimonials'
							className='flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-ink transition-all hover:border-accent hover:text-accent'
						>
							<ChevronLeft className='size-5' />
						</button>
						<button
							type='button'
							onClick={next}
							aria-label='Next testimonials'
							className='flex size-11 items-center justify-center rounded-full bg-accent text-white transition-all hover:bg-accent-dark'
						>
							<ChevronRight className='size-5' />
						</button>
					</div>
				</Container>
			</section>
		)
	}

	if (variant === 'grid-2') {
		return (
			<section className={`py-20 sm:py-24 ${bgClass}`}>
				<Container className='flex flex-col gap-12'>
					<div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end'>
						<SectionHeading eyebrow={eyebrow} title={title} />
						{ctaButton && (
							<Button to={ctaButton.to} variant='outline' className='shrink-0'>
								{ctaButton.label}
							</Button>
						)}
					</div>
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
						{items.slice(0, 4).map((t) => (
							<TestimonialCard key={t.id} testimonial={t} />
						))}
					</div>
				</Container>
			</section>
		)
	}

	// grid-offset: 3 cards, staggered vertically on desktop
	return (
		<section className={`py-20 sm:py-24 ${bgClass}`}>
			<Container className='flex flex-col items-center gap-12'>
				<SectionHeading eyebrow={eyebrow} title={title} align='center' />
				<div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{items.slice(0, 3).map((t, i) => (
						<TestimonialCard
							key={t.id}
							testimonial={t}
							ratingStyle='fraction'
							className={i === 1 ? 'lg:mt-10' : ''}
						/>
					))}
				</div>
			</Container>
		</section>
	)
}
