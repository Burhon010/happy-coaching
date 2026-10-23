import { Users } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Zigzag } from '@/shared/ui/Zigzag'
import { StatBadge } from '@/shared/ui/StatBadge'
import { coachPhotos } from '@/shared/config/media'

export function Hero() {
	return (
		<section className='relative overflow-hidden bg-sand pt-14 pb-20 sm:pt-20 sm:pb-28'>
			<Zigzag className='absolute top-10 right-6 h-10 w-28 rotate-180 opacity-70 sm:top-16 sm:right-12' />

			<Container className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
				<div className='flex flex-col gap-6'>
					<span className='text-sm text-body'>Proven strategies backed by science for success.</span>
					<h1 className='text-4xl leading-[1.15] font-bold text-ink sm:text-5xl'>About me</h1>
					<p className='max-w-md text-base leading-relaxed text-body'>
						I spent years chasing other people's definition of success before I found my
						own. Now I help people build a life that is actually, honestly theirs.
					</p>
					<Button to='/free-guide' className='mt-2'>
						Get your free guide now
					</Button>
				</div>

				<div className='relative mx-auto w-full max-w-sm'>
					<div className='aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(30,30,90,0.25)]'>
						<img src={coachPhotos.aboutHero} alt='Coach portrait' className='h-full w-full object-cover' />
					</div>
					<StatBadge
						icon={Users}
						value='300+'
						label='Clients coached'
						className='absolute top-1/2 -right-4 w-44 -translate-y-1/2 sm:-right-10'
					/>
				</div>
			</Container>
		</section>
	)
}
