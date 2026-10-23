import { MessageCircle } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { coachPhotos } from '@/shared/config/media'

// Compact promo banner for the free guide, used on the Homepage. The Free
// Guide page itself has its own, bigger hero version.
export function FreeGuidePromo() {
	return (
		<section className='bg-white py-20 sm:py-24'>
			<Container className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
				<div className='flex flex-col gap-5'>
					<h2 className='text-3xl leading-tight font-bold text-ink sm:text-4xl'>
						Don't miss out on my{' '}
						<span className='text-accent'>'Live life at the full potential'</span> free guide
					</h2>
					<p className='text-base leading-relaxed text-body'>
						A short, practical guide with the exact exercises I use with 1:1 clients —
						yours for free, no strings attached.
					</p>
					<Button to='/free-guide' className='mt-2'>
						Get your free guide now
					</Button>
				</div>

				<div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-purple shadow-xl'>
					<img
						src={coachPhotos.freeGuideCover}
						alt='Free guide cover'
						className='h-full w-full object-cover opacity-80 mix-blend-luminosity'
						loading='lazy'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-purple via-purple/40 to-transparent' />
					<p className='absolute top-9 right-20 left-8 text-xl font-bold text-white'>
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
