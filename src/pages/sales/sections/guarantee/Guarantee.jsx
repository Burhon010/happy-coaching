import { Award } from 'lucide-react'
import { Container } from '@/shared/ui/Container'

export function Guarantee() {
	return (
		<section className='bg-white py-20 sm:py-24'>
			<Container className='mx-auto flex max-w-xl flex-col items-center gap-5 text-center'>
				<span className='flex size-16 items-center justify-center rounded-full bg-accent-light text-accent'>
					<Award className='size-7' />
				</span>
				<h2 className='text-3xl font-bold text-ink'>Guarantee</h2>
				<p className='text-base leading-relaxed text-body'>
					Show up and do the work for the first two weeks. If you don't feel it's helping,
					I'll refund the remainder of your program — no questions asked.
				</p>
			</Container>
		</section>
	)
}
