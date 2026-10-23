import { Play } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Button } from '@/shared/ui/Button'
import { iconMap } from '@/shared/lib/iconMap'

// Decorative video-player chrome (play button + progress bar) for the wide
// photo in the "icons-2" variant — the actual design uses this same "video"
// treatment on both Free Guide and the Sales page.
function VideoPhoto({ photo, videoStyle, className }) {
	return (
		<div className={`relative overflow-hidden ${className}`}>
			<img src={photo} alt='' className='h-full w-full object-cover' loading='lazy' />
			{videoStyle && (
				<>
					<div className='absolute inset-0 bg-ink/10' />
					<span className='absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg'>
						<Play className='size-5 translate-x-0.5 fill-current' />
					</span>
					<div className='absolute right-6 bottom-5 left-6 h-1 rounded-full bg-white/40'>
						<div className='h-full w-1/3 rounded-full bg-white' />
					</div>
				</>
			)}
		</div>
	)
}

/**
 * The recurring "Are you ready to transform your life?" block, in the three
 * layouts it takes across the site:
 * - "steps": numbered steps list + a tall photo (Services)
 * - "icons-2": 2 icon points + a wide photo below (Free Guide, Sales "about program")
 * - "icons-grid": 3x2 icon grid, centered heading (About me, Sales "results")
 */
export function TransformSection({
	variant = 'icons-grid',
	eyebrow = 'How does it work?',
	title = 'Are you ready to transform your life?',
	text,
	items = [],
	photo,
	videoStyle = false,
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
							{items.map((step) => {
								const Icon = iconMap[step.icon]
								return (
									<li key={step.id} className='flex gap-4'>
										{Icon && (
											<span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent'>
												<Icon className='size-4' />
											</span>
										)}
										<div>
											<p className='font-semibold text-ink'>{step.title}</p>
											<p className='mt-1 text-sm text-body'>{step.text}</p>
										</div>
									</li>
								)
							})}
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
						<VideoPhoto
							photo={photo}
							videoStyle={videoStyle}
							className='h-72 w-full rounded-3xl shadow-xl sm:h-96'
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
