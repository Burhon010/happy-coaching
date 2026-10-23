import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { clientAvatars } from '@/data/photos'

// Scattered avatars sit in the outer margins of the 1200px container, well
// clear of the centered max-w-2xl text column, so they never overlap copy.
const AVATAR_LAYOUT = [
	{ top: '6%', left: '2%', size: 'size-14' },
	{ top: '68%', left: '6%', size: 'size-11' },
	{ top: '14%', left: '93%', size: 'size-12' },
	{ top: '70%', left: '90%', size: 'size-14' },
	{ top: '42%', left: '0%', size: 'size-9' },
	{ top: '44%', left: '95%', size: 'size-10' }
]

export function FinalCta() {
	return (
		<section className='relative overflow-hidden bg-white py-24 sm:py-32'>
			<Container className='relative'>
				{AVATAR_LAYOUT.map((pos, i) => (
					<img
						key={i}
						src={clientAvatars[i]}
						alt=''
						className={`absolute hidden rounded-full object-cover shadow-md lg:block ${pos.size}`}
						style={{ top: pos.top, left: pos.left }}
						loading='lazy'
					/>
				))}

				<div className='relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center'>
					<span className='text-xs font-bold tracking-[0.2em] text-body uppercase'>
						Free guide
					</span>
					<h2 className='text-3xl leading-tight font-bold text-ink sm:text-4xl'>
						Don't miss out on my{' '}
						<span className='text-accent'>'Live life at the full potential'</span> free guide
					</h2>
					<p className='max-w-md text-base leading-relaxed text-body'>
						Join hundreds of readers already using it to build real, lasting confidence.
					</p>
					<Button href='#guide-form'>Get the free guide</Button>
				</div>
			</Container>
		</section>
	)
}
