import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { iconMap } from '@/shared/lib/iconMap'
import { serviceAreas } from '@/data/services'

export function FocusAreasGrid() {
	return (
		<section className='relative bg-white py-20 sm:py-24'>
			<Container className='flex flex-col items-center gap-16'>
				<SectionHeading
					eyebrow='WHAT I OFFER'
					title='I can help you in these particular areas.'
					align='center'
				/>

				<div className='grid w-full grid-cols-1 gap-8 sm:grid-cols-2'>
					{serviceAreas.map((area, i) => {
						const Icon = iconMap[area.icon]
						return (
							<div
								key={area.id}
								className={`flex flex-col gap-4 rounded-3xl bg-sand p-8 ${
									i % 2 === 1 ? 'sm:mt-12' : ''
								}`}
							>
								{Icon && (
									<span className='flex size-12 items-center justify-center rounded-full bg-white text-accent'>
										<Icon className='size-5' />
									</span>
								)}
								<h3 className={`text-lg font-bold ${area.highlight ? 'text-accent' : 'text-ink'}`}>
									{area.title}
								</h3>
								<p className='text-sm leading-relaxed text-body'>{area.text}</p>
							</div>
						)
					})}
				</div>
			</Container>
		</section>
	)
}
