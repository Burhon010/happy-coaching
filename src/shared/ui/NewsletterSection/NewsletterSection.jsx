import { Container } from '@/shared/ui/Container'
import { NewsletterForm } from '@/features/subscribe-newsletter'

export function NewsletterSection() {
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

				<NewsletterForm />
			</Container>
		</section>
	)
}
