import { Hero } from '../sections/hero'
import { FocusAreasGrid } from '../sections/focus-areas-grid'
import { TransformSection, FaqSection, NewsletterSection } from '@/shared/ui'
import { servicesSteps } from '@/entities/highlight'
import { coachPhotos } from '@/shared/config/media'

export function ServicesPage() {
	return (
		<>
			<Hero />
			<FocusAreasGrid />
			<TransformSection
				variant='steps'
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
