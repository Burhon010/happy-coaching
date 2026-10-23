import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Button } from '@/shared/ui/Button'
import { iconMap } from '@/shared/lib/iconMap'

/**
 * The recurring "Are you ready to transform your life?" block, in the three
 * layouts it takes across the site:
 * - "steps": numbered steps list + a tall photo (Services)
 * - "icons-2": 2 icon points + a wide photo below (Free Guide, Sales "about program")
 * - "icons-grid": 3x2 icon grid, centered heading (About me, Sales "results")
 */
export function TransformSection({
	variant = 'icons-grid',
	eyebrow = 'TRANSFORM',
	title = 'Are you ready to transform your life?',
	text,
	items = [],
	photo,
	background = 'white',
	ctaButton
}) {
	const bgClass = background === 'sand' ? 'bg-sand' : 'bg-white'

	if (variant === 'steps') {
		return (
			<section className={`py-20 sm:py-24 ${bgClass}`}>
				<Container className='grid grid-cols-1 items-start gap-12 md:grid-cols-2'>
					<div className='flex flex-col gap-8'>
						<SectionHeading eyebrow={eyebrow} title={title} text={text} />
						<ol className='flex flex-col gap-6'>
							{items.map((step, i) => (
								<li key={step.id} className='flex gap-4'>
									<span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white'>
										{i + 1}
									</span>
									<div>
										<p className='font-semibold text-ink'>{step.title}</p>
										<p className='mt-1 text-sm text-body'>{step.text}</p>
									</div>
								</li>
							))}
						</ol>
					</div>
					{photo && (
						<img
							src={photo}
							alt=''
							className='h-full max-h-[560px] w-full rounded-3xl object-cover shadow-xl'
							loading='lazy'
						/>
					)}
				</Container>
			</section>
		)
	}

	if (variant === 'icons-2') {
		return (
			<section className={`py-20 sm:py-24 ${bgClass}`}>
				<Container className='flex flex-col gap-10'>
					<div className='grid grid-cols-1 items-center gap-10 md:grid-cols-2'>
						<SectionHeading eyebrow={eyebrow} title={title} text={text} />
						<div className='flex flex-col gap-6'>
							{items.map((item) => {
								const Icon = iconMap[item.icon]
								return (
									<div key={item.id} className='flex gap-4'>
										{Icon && (
											<span className='flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent'>
												<Icon className='size-5' />
											</span>
										)}
										<div>
											<p className='font-semibold text-ink'>{item.title}</p>
											<p className='mt-1 text-sm text-body'>{item.text}</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>
					{photo && (
						<img
							src={photo}
							alt=''
							className='h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96'
							loading='lazy'
						/>
					)}
				</Container>
			</section>
		)
	}

	// icons-grid: 3x2 (or fewer), centered heading
	return (
		<section className={`py-20 sm:py-24 ${bgClass}`}>
			<Container className='flex flex-col items-center gap-14'>
				<SectionHeading eyebrow={eyebrow} title={title} text={text} align='center' />
				<div className='grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{items.map((item) => {
						const Icon = iconMap[item.icon]
						return (
							<div key={item.id} className='flex flex-col items-start gap-4 text-left'>
								{Icon && (
									<span className='flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent'>
										<Icon className='size-5' />
									</span>
								)}
								<p className='font-semibold text-ink'>{item.title}</p>
								<p className='-mt-2 text-sm text-body'>{item.text}</p>
							</div>
						)
					})}
				</div>
				{ctaButton && <Button to={ctaButton.to}>{ctaButton.label}</Button>}
			</Container>
		</section>
	)
}
