import { Hero } from '../sections/hero'
import { FinalCta } from '../sections/final-cta'
import { TestimonialsSection, TransformSection, NewsletterSection } from '@/shared/ui'
import { testimonials } from '@/data/testimonials'
import { consultationPoints } from '@/data/transform'
import { coachPhotos } from '@/data/photos'

export function FreeGuidePage() {
	return (
		<>
			<Hero />
			<TestimonialsSection
				variant='grid-2'
				eyebrow='Testimonials'
				title='Results that speak for themselves'
				items={testimonials}
				ctaButton={{ to: '/#book', label: 'Get started' }}
				background='white'
			/>
			<TransformSection
				variant='icons-2'
				title='Are you ready to transform your life?'
				text='A quick look at what you will walk away with.'
				items={consultationPoints}
				photo={coachPhotos.freeGuideBook}
				videoStyle
				background='sand'
			/>
			<FinalCta />
			<NewsletterSection />
		</>
	)
}
