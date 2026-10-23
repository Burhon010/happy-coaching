import { HeartHandshake } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Zigzag } from '@/shared/ui/Zigzag'
import { StatBadge } from '@/shared/ui/StatBadge'
import { coachPhotos } from '@/data/photos'

export function Hero() {
	return (
		<section className='relative overflow-hidden bg-sand pt-14 pb-20 sm:pt-20 sm:pb-28'>
			<Zigzag className='absolute top-10 left-6 h-10 w-28 opacity-70 sm:top-16 sm:left-12' />

			<Container className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
				<div className='flex flex-col gap-6'>
					<span className='text-xs font-bold tracking-[0.2em] text-body uppercase'>
						Personal life coach
					</span>
					<h1 className='text-4xl leading-[1.15] font-bold text-ink sm:text-5xl lg:text-[56px]'>
						Live life at the <span className='text-accent'>full potential</span>
					</h1>
					<p className='max-w-md text-base leading-relaxed text-body'>
						I help ambitious, overwhelmed people reconnect with what they actually want —
						and build the confidence to go after it.
					</p>
					<Button to='/#book' className='mt-2'>
						Book a free session
					</Button>
				</div>

				<div className='relative mx-auto w-full max-w-sm'>
					<div className='aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(30,30,90,0.25)]'>
						<img
							src={coachPhotos.homeHero}
							alt='Coach portrait'
							className='h-full w-full object-cover'
						/>
					</div>
					<StatBadge
						icon={HeartHandshake}
						value='98%'
						label='client satisfaction'
						className='absolute -bottom-6 -left-6 w-48 sm:-left-10'
					/>
				</div>
			</Container>
		</section>
	)
}
