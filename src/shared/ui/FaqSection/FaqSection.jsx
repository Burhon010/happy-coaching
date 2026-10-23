import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Button } from '@/shared/ui/Button'
import { faqItems } from '@/entities/faq-item'
import { FaqAccordion } from '@/features/faq-accordion'

export function FaqSection() {
	return (
		<section className='bg-white py-20 sm:py-24'>
			<Container className='flex flex-col items-center gap-12'>
				<SectionHeading
					title='Good to know.'
					text='Everything you need to know about my services.'
					align='center'
				/>

				<FaqAccordion items={faqItems} />

				<div className='flex w-full flex-col items-center gap-4 rounded-3xl bg-sand px-8 py-10 text-center'>
					<h3 className='text-xl font-bold text-ink'>Still have questions?</h3>
					<p className='max-w-md text-sm text-body'>
						Can't find the answer you're looking for? Please chat to our friendly team.
					</p>
					<Button to='/#book'>Get in touch</Button>
				</div>
			</Container>
		</section>
	)
}
