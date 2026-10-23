import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Button } from '@/shared/ui/Button'
import { faqItems } from '@/data/faq'

export function FaqSection() {
	const [openId, setOpenId] = useState(faqItems[0]?.id)

	return (
		<section className='bg-white py-20 sm:py-24'>
			<Container className='flex flex-col items-center gap-12'>
				<SectionHeading
					eyebrow='FAQ'
					title='Good to know.'
					text='A few things people usually want to know before booking a first session.'
					align='center'
				/>

				<div className='w-full max-w-2xl divide-y divide-gray-100 border-t border-gray-100'>
					{faqItems.map((item) => {
						const isOpen = openId === item.id
						return (
							<div key={item.id}>
								<button
									type='button'
									onClick={() => setOpenId(isOpen ? null : item.id)}
									className='flex w-full items-center justify-between gap-6 py-5 text-left'
									aria-expanded={isOpen}
								>
									<span className='text-base font-semibold text-ink'>{item.question}</span>
									<span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent'>
										{isOpen ? <Minus className='size-4' /> : <Plus className='size-4' />}
									</span>
								</button>
								{isOpen && (
									<p className='animate-fade-up pb-6 text-sm leading-relaxed text-body'>
										{item.answer}
									</p>
								)}
							</div>
						)
					})}
				</div>

				<div className='flex w-full flex-col items-center gap-4 rounded-3xl bg-sand px-8 py-10 text-center'>
					<h3 className='text-xl font-bold text-ink'>Still have questions?</h3>
					<p className='max-w-md text-sm text-body'>
						Book a free 15-minute call and ask me anything before you commit to a single
						session.
					</p>
					<Button to='/#book'>Book a free session</Button>
				</div>
			</Container>
		</section>
	)
}
