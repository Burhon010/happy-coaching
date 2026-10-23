import { Hero } from '../sections/hero'
import { FocusAreasGrid } from '../sections/focus-areas-grid'
import { TransformSection, FaqSection, NewsletterSection } from '@/shared/ui'
import { servicesSteps } from '@/data/transform'
import { coachPhotos } from '@/data/photos'

export function ServicesPage() {
	return (
		<>
			<Hero />
			<FocusAreasGrid />
			<TransformSection
				variant='steps'
				eyebrow='HOW IT WORKS'
				title='Are you ready to transform your life?'
				text='Here is exactly what working together looks like, from the first call to the first real shift.'
				items={servicesSteps}
				photo={coachPhotos.servicesHero}
				background='sand'
			/>
			<FaqSection />
			<NewsletterSection />
		</>
	)
}
