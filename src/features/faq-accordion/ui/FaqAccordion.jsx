import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

// Single-open accordion list over a set of { id, question, answer } items.
// Used by shared/ui/FaqSection with entities/faq-item's data.
export function FaqAccordion({ items }) {
	const [openId, setOpenId] = useState(items[0]?.id)

	return (
		<div className='w-full max-w-2xl divide-y divide-gray-100 border-t border-gray-100'>
			{items.map((item) => {
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
							<p className='animate-fade-up pb-6 text-sm leading-relaxed text-body'>{item.answer}</p>
						)}
					</div>
				)
			})}
		</div>
	)
}
