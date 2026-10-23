import { Hero } from '../sections/hero'
import { FitCheck } from '../sections/fit-check'
import { Guarantee } from '../sections/guarantee'
import { TransformSection, TestimonialsSection, CtaSession, FaqSection, NewsletterSection } from '@/shared/ui'
import { salesResults, consultationPoints } from '@/entities/highlight'
import { testimonials } from '@/entities/testimonial'
import { coachPhotos } from '@/shared/config/media'

export function SalesPage() {
	return (
		<>
			<Hero />

			<TransformSection
				variant='icons-grid'
				title='Are you ready to transform your life?'
				text='Here is what shifts for most people by the end of the program.'
				items={salesResults}
			/>

			<TransformSection
				variant='icons-2'
				title='Are you ready to transform your life?'
				text='A structured, supportive eight weeks built entirely around rebuilding self-worth.'
				items={consultationPoints}
				photo={coachPhotos.salesProgramPhoto}
				videoStyle
				background='sand'
			/>

			<TestimonialsSection
				variant='grid-2'
				eyebrow='Testimonials'
				title='Results that speak for themselves'
				items={testimonials}
				ctaButton={{ to: '/#book', label: 'Get started' }}
			/>

			<FitCheck />
			<CtaSession buttonLabel='Claim your spot' />
			<Guarantee />
			<FaqSection />
			<NewsletterSection />
		</>
	)
}
