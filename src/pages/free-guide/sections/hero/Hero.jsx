import { MessageCircle } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { coachPhotos } from '@/shared/config/media'
import { RequestFreeGuideForm } from '@/features/request-free-guide'

export function Hero() {
	return (
		<section id='guide-form' className='bg-sand pt-14 pb-20 sm:pt-20 sm:pb-28'>
			<Container className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
				<div className='flex flex-col gap-6'>
					<h1 className='text-4xl leading-[1.15] font-bold text-ink sm:text-5xl'>
						Results that speak for themselves
					</h1>
					<p className='max-w-md text-base leading-relaxed text-body'>
						A short, practical guide with the exact exercises I use with 1:1 clients —
						yours for free, no strings attached.
					</p>

					<RequestFreeGuideForm />
				</div>

				<div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-purple shadow-xl'>
					<img
						src={coachPhotos.freeGuideCover}
						alt='Free guide cover'
						className='h-full w-full object-cover opacity-80 mix-blend-luminosity'
						loading='lazy'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-purple via-purple/40 to-transparent' />
					<p className='absolute top-9 right-20 left-8 text-2xl leading-snug font-bold text-white'>
						Are you ready to transform your life?
					</p>
					<span className='absolute top-5 right-5 flex size-16 items-center justify-center rounded-full bg-accent text-center text-[11px] leading-tight font-bold text-white shadow-lg'>
						Free guide!
					</span>
					<div className='absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-ink shadow-md backdrop-blur-sm'>
						<MessageCircle className='size-3.5 text-accent' />
						Ready to start? Let's talk!
					</div>
				</div>
			</Container>
		</section>
	)
}
