import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
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
					<span className='text-xs font-bold tracking-[0.2em] text-body uppercase'>
						Free guide
					</span>
					<h1 className='text-4xl leading-[1.15] font-bold text-ink sm:text-5xl'>
						Live life at the <span className='text-accent'>full potential</span>
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
								placeholder='Your name'
								className='w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm focus:border-accent focus:outline-none'
							/>
							<input
								type='email'
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								placeholder='Your email address'
								className='w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm focus:border-accent focus:outline-none'
							/>
							{error && <p className='text-xs font-medium text-red-500'>{error}</p>}
							<button
								type='submit'
								className='w-fit rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark'
							>
								Send me the free guide
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
					<p className='absolute top-10 right-8 left-8 text-2xl leading-snug font-bold text-white'>
						Are you ready to transform your life?
					</p>
					<span className='absolute bottom-7 left-7 flex size-20 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-lg'>
						Free
					</span>
				</div>
			</Container>
		</section>
	)
}
