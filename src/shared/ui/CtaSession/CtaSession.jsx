import { Calendar } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { coachPhotos } from '@/shared/config/media'

// "Get 15-Minute Complimentary online session." — reused on Home (default
// "Book now") and the Self Esteem Therapy sales page ("Claim your spot").
export function CtaSession({ buttonLabel = 'Book now' }) {
	return (
		<section id='book' className='bg-white py-20 sm:py-24'>
			<Container>
				<div className='grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[2.5rem] bg-sand md:grid-cols-2'>
					<div className='flex flex-col gap-5 p-8 sm:p-12'>
						<h2 className='text-3xl leading-tight font-bold text-ink sm:text-4xl'>
							Get 15-Minutes Complimentary online session.
						</h2>
						<p className='text-sm font-medium text-body'>Limited Period Offer. Claim Now.</p>
						{/* This card *is* the booking section — its own CTA is a placeholder
						    until a real calendar/booking flow is wired up. */}
						<Button href='#' className='mt-2'>
							{buttonLabel}
						</Button>
					</div>

					<div className='relative h-72 md:h-full md:min-h-[360px]'>
						<img
							src={coachPhotos.ctaSession}
							alt='Coach smiling'
							className='h-full w-full object-cover'
							loading='lazy'
						/>
						<div className='absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-ink shadow-md backdrop-blur-sm'>
							<Calendar className='size-3.5 text-accent' />
							Book
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
