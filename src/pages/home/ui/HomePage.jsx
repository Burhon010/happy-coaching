import { Hero } from '../sections/hero'
import { FocusAreas } from '../sections/focus-areas'
import { Blog } from '../sections/blog'
import { TestimonialsSection, FreeGuidePromo, CtaSession, NewsletterSection } from '@/shared/ui'
import { testimonials } from '@/entities/testimonial'

export function HomePage() {
	return (
		<>
			<Hero />
			<FocusAreas />
			<TestimonialsSection variant='slider' items={testimonials} align='left' background='sand' />
			<Blog />
			<FreeGuidePromo />
			<CtaSession />
			<NewsletterSection />
		</>
	)
}
