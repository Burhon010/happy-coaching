import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

// Name + email lead-capture form for the Free Guide page's hero, with
// validation and a "check your inbox" success state.
export function RequestFreeGuideForm() {
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

	if (submitted) {
		return (
			<div className='flex max-w-sm items-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-accent shadow-sm'>
				<CheckCircle2 className='size-5 shrink-0' />
				Check your inbox — your guide is on its way!
			</div>
		)
	}

	return (
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
				We care about your data in our{' '}
				<a href='#' className='underline'>
					privacy policy
				</a>
			</p>
			<button
				type='submit'
				className='w-fit rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark'
			>
				Get free guide
			</button>
		</form>
	)
}
