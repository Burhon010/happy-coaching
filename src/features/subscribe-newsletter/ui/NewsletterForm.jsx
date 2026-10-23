import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

// Email-only subscribe form with validation + a transient "subscribed" state.
// Used by shared/ui/NewsletterSection on every page.
export function NewsletterForm() {
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

	if (submitted) {
		return (
			<div className='flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-accent shadow-sm'>
				<CheckCircle2 className='size-5' />
				Thanks, you're subscribed!
			</div>
		)
	}

	return (
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
	)
}
