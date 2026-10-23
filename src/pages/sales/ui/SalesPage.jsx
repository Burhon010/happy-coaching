import { Hero } from '../sections/hero'
import { FitCheck } from '../sections/fit-check'
import { Guarantee } from '../sections/guarantee'
import { TransformSection, TestimonialsSection, CtaSession, FaqSection, NewsletterSection } from '@/shared/ui'
import { salesResults, salesProgramPoints } from '@/data/transform'
import { testimonials } from '@/data/testimonials'
import { coachPhotos } from '@/data/photos'

export function SalesPage() {
	return (
		<>
			<Hero />

			<TransformSection
				variant='icons-grid'
				eyebrow='WHAT YOU WILL GAIN'
				title='Are you ready to transform your life?'
				text='Here is what shifts for most people by the end of the program.'
				items={salesResults}
			/>

			<TransformSection
				variant='icons-2'
				eyebrow='ABOUT THE PROGRAM'
				title='Are you ready to transform your life?'
				text='A structured, supportive eight weeks built entirely around rebuilding self-worth.'
				items={salesProgramPoints}
				photo={coachPhotos.salesProgramPhoto}
				background='sand'
			/>

			<TestimonialsSection
				variant='grid-2'
				eyebrow='TESTIMONIALS'
				title='Results that speak for themselves'
				items={testimonials}
				ctaButton={{ to: '/#book', label: 'Reserve your spot' }}
			/>

			<FitCheck />
			<CtaSession />
			<Guarantee />
			<FaqSection />
			<NewsletterSection />
		</>
	)
}
