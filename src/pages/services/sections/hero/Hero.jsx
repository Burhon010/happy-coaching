import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { coachPhotos } from '@/data/photos'

export function Hero() {
	return (
		<section className='bg-sand pt-14 pb-20 sm:pt-20 sm:pb-28'>
			<Container className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
				<div className='flex flex-col gap-6'>
					<span className='text-xs font-bold tracking-[0.2em] text-body uppercase'>Services</span>
					<h1 className='text-4xl leading-[1.15] font-bold text-ink sm:text-5xl'>
						I help people to discover their true potential
					</h1>
					<p className='max-w-md text-base leading-relaxed text-body'>
						From a single clarity session to ongoing 1:1 coaching, every service is built
						to meet you exactly where you are right now.
					</p>
					<Button to='/#book' className='mt-2'>
						Book a free session
					</Button>
				</div>

				<div className='mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(30,30,90,0.25)]'>
					<img
						src={coachPhotos.servicesHero}
						alt='Coach holding a book'
						className='h-full w-full object-cover'
					/>
				</div>
			</Container>
		</section>
	)
}
