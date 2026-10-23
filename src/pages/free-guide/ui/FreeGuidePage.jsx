import { Hero } from '../sections/hero'
import { FinalCta } from '../sections/final-cta'
import { TestimonialsSection, TransformSection, NewsletterSection } from '@/shared/ui'
import { testimonials } from '@/data/testimonials'
import { freeGuidePoints } from '@/data/transform'
import { coachPhotos } from '@/data/photos'

export function FreeGuidePage() {
	return (
		<>
			<Hero />
			<TestimonialsSection
				variant='grid-2'
				eyebrow='TESTIMONIALS'
				title='Results that speak for themselves'
				items={testimonials}
				ctaButton={{ to: '/#book', label: 'Book a free session' }}
			/>
			<TransformSection
				variant='icons-2'
				eyebrow='INSIDE THE GUIDE'
				title='Are you ready to transform your life?'
				text='A quick look at what you will walk away with.'
				items={freeGuidePoints}
				photo={coachPhotos.freeGuideBook}
				background='sand'
			/>
			<FinalCta />
			<NewsletterSection />
		</>
	)
}
