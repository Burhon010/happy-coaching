import { Hero } from '../sections/hero'
import { Press } from '../sections/press'
import { TestimonialsSection, TransformSection, FaqSection, NewsletterSection } from '@/shared/ui'
import { testimonials } from '@/data/testimonials'
import { aboutHighlights } from '@/data/transform'

export function AboutPage() {
	return (
		<>
			<Hero />
			<Press />
			<TestimonialsSection variant='grid-offset' items={testimonials} />
			<TransformSection
				variant='icons-grid'
				eyebrow='WHY WORK WITH ME'
				title='Are you ready to transform your life?'
				text='A few things that make working together different.'
				items={aboutHighlights}
				ctaButton={{ to: '/#book', label: 'Book a free session' }}
			/>
			<FaqSection />
			<NewsletterSection />
		</>
	)
}
