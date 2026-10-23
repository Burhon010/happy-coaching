import { X, Check } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { notForYou, forYou } from '@/data/fitCheck'

export function FitCheck() {
	return (
		<section className='bg-sand py-20 sm:py-24'>
			<Container className='flex flex-col items-center gap-14'>
				<SectionHeading
					eyebrow='This is not for everyone!'
					title='This program is perfect for you if…'
					align='center'
				/>

				<div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='flex flex-col gap-5 p-2'>
						<h3 className='text-lg font-bold text-ink'>This is NOT for you if…</h3>
						<ul className='flex flex-col gap-4'>
							{notForYou.map((item, i) => (
								<li key={i} className='flex items-start gap-3'>
									<span className='flex size-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500'>
										<X className='size-3.5' />
									</span>
									<span className='text-sm leading-relaxed text-body'>{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div className='flex flex-col gap-5 rounded-3xl bg-white p-8 shadow-[0_20px_40px_-20px_rgba(30,30,90,0.15)]'>
						<h3 className='text-lg font-bold text-ink'>This is for you if…</h3>
						<ul className='flex flex-col gap-4'>
							{forYou.map((item, i) => (
								<li key={i} className='flex items-start gap-3'>
									<span className='flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent'>
										<Check className='size-3.5' />
									</span>
									<span className='text-sm leading-relaxed text-body'>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}
