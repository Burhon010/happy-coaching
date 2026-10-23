import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/shared/ui/Container'

export function NewsletterSection() {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		if (!/^\S+@\S+\.\S+$/.test(email)) {
			setError('Please enter a valid email address.')
			return
		}
		setError('')
		setSubmitted(true)
		setTimeout(() => {
			setSubmitted(false)
			setEmail('')
		}, 3000)
	}

	return (
		<section className='bg-sand py-16'>
			<Container className='flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left'>
				<div className='max-w-md'>
					<h3 className='text-xl font-bold text-ink sm:text-2xl'>
						Get notified when I publish new articles
					</h3>
					<p className='mt-2 text-sm text-body'>
						Stay up to date with the latest news, announcements, and articles.
					</p>
				</div>

				{submitted ? (
					<div className='flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-accent shadow-sm'>
						<CheckCircle2 className='size-5' />
						Thanks, you're subscribed!
					</div>
				) : (
					<form onSubmit={handleSubmit} className='flex w-full max-w-md flex-col gap-2 sm:w-auto'>
						<div className='flex flex-col gap-3 sm:flex-row'>
							<input
								type='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Enter your email'
								className='w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm focus:border-accent focus:outline-none sm:w-64'
							/>
							<button
								type='submit'
								className='w-fit shrink-0 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark'
							>
								Subscribe
							</button>
						</div>
						{error && <p className='text-xs font-medium text-red-500'>{error}</p>}
					</form>
				)}
			</Container>
		</section>
	)
}
