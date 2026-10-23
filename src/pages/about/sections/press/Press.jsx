import { Container } from '@/shared/ui/Container'
import { pressMentions } from '@/data/photos'

export function Press() {
	return (
		<section className='bg-white py-14'>
			<Container className='flex flex-col items-center gap-8'>
				<p className='text-sm text-body'>As featured in</p>
				<div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 grayscale'>
					{pressMentions.map((name) => (
						<span key={name} className='text-lg font-bold tracking-wide text-ink'>
							{name}
						</span>
					))}
				</div>
			</Container>
		</section>
	)
}
