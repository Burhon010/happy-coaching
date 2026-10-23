import { useState } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { Container } from '@/shared/ui/Container'
import { coachPhotos } from '@/data/photos'

export function Hero() {
	const [form, setForm] = useState({ name: '', email: '' })
	const [error, setError] = useState('')
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		if (!form.name.trim()) {
			setError('Please enter your name.')
			return
		}
		if (!/^\S+@\S+\.\S+$/.test(form.email)) {
			setError('Please enter a valid email address.')
			return
		}
		setError('')
		setSubmitted(true)
	}

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

					{submitted ? (
						<div className='flex max-w-sm items-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-accent shadow-sm'>
							<CheckCircle2 className='size-5 shrink-0' />
							Check your inbox — your guide is on its way!
						</div>
					) : (
						<form onSubmit={handleSubmit} className='flex max-w-sm flex-col gap-3'>
							<input
								type='text'
								value={form.name}
								onChange={(e) => setForm({ ...form, name: e.target.value })}
								placeholder='Name'
								className='w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm focus:border-accent focus:outline-none'
							/>
							<input
								type='email'
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								placeholder='Enter your email'
								className='w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm focus:border-accent focus:outline-none'
							/>
							{error && <p className='text-xs font-medium text-red-500'>{error}</p>}
							<p className='text-xs text-body'>
								We care about your data in our <a href='#' className='underline'>privacy policy</a>
							</p>
							<button
								type='submit'
								className='w-fit rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark'
							>
								Get free guide
							</button>
						</form>
					)}
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
