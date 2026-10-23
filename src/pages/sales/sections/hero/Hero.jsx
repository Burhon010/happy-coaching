import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { coachPhotos } from '@/shared/config/media'

export function Hero() {
	return (
		<section className='bg-sand pt-14 pb-20 sm:pt-20 sm:pb-28'>
			<Container className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
				<div className='flex flex-col gap-6'>
					<span className='text-sm text-body'>Proven strategies backed by science for success.</span>
					<h1 className='text-4xl leading-[1.15] font-bold text-ink sm:text-5xl'>
						Self Esteem Therapy
					</h1>
					<p className='max-w-md text-base leading-relaxed text-body'>
						I help people to discover their true potential and live a fulfilling life.
						Discover the simple steps backed by science. Wanna transform your life?
					</p>
					<Button to='/#book' className='mt-2'>
						Claim your spot
					</Button>
				</div>

				<div className='mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(30,30,90,0.25)]'>
					<img
						src={coachPhotos.salesHero}
						alt='Group coaching session'
						className='h-full w-full object-cover'
					/>
				</div>
			</Container>
		</section>
	)
}
