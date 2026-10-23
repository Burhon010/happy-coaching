import { Container } from '@/shared/ui/Container'
import { iconMap } from '@/shared/lib/iconMap'
import { homeFocusAreas } from '@/entities/service'

export function FocusAreas() {
	return (
		<section className='bg-white py-20 sm:py-24'>
			<Container className='flex flex-col gap-14'>
				<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
					<h2 className='text-3xl leading-tight font-bold text-ink sm:text-4xl'>
						I can help you in these particular areas.
					</h2>
					<div className='flex flex-col gap-4 text-base leading-relaxed text-body'>
						<p>
							Every person who comes to me is dealing with something different — a career
							crossroads, a confidence block, a relationship that needs honesty.
						</p>
						<p>
							Whatever brought you here, we'll meet you exactly where you are and build
							forward from there.
						</p>
					</div>
				</div>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
					{homeFocusAreas.map((area) => {
						const Icon = iconMap[area.icon]
						return (
							<div key={area.id} className='flex flex-col gap-4'>
								{Icon && (
									<span className='flex size-12 items-center justify-center rounded-full bg-accent-light text-accent'>
										<Icon className='size-5' />
									</span>
								)}
								<h3 className='text-lg font-bold text-ink'>{area.title}</h3>
								<p className='text-sm leading-relaxed text-body'>{area.text}</p>
							</div>
						)
					})}
				</div>
			</Container>
		</section>
	)
}
