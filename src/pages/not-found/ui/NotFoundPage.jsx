import { Button } from '@/shared/ui/Button'

export function NotFoundPage() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-5 bg-sand px-5 text-center'>
			<p className='text-sm font-bold tracking-[0.2em] text-accent uppercase'>404</p>
			<h1 className='text-3xl font-bold text-ink sm:text-4xl'>This page took a wrong turn.</h1>
			<p className='max-w-md text-body'>
				The page you're looking for doesn't exist, or may have moved.
			</p>
			<Button to='/'>Back to homepage</Button>
		</div>
	)
}
