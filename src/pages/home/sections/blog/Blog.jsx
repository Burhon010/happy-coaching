import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { blogPosts } from '@/data/blogPosts'

export function Blog() {
	return (
		<section className='bg-sand py-20 sm:py-24'>
			<Container className='flex flex-col items-center gap-14'>
				<h2 className='max-w-xl text-center text-3xl leading-tight font-bold text-ink sm:text-4xl'>
					Stay Motivated, read the weekly blog articles.
				</h2>

				<div className='grid w-full grid-cols-1 gap-8 sm:grid-cols-3'>
					{blogPosts.map((post) => (
						<article key={post.id} className='flex flex-col gap-4'>
							<div className='aspect-[4/3] overflow-hidden rounded-3xl'>
								<img
									src={post.image}
									alt={post.title}
									className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
									loading='lazy'
								/>
							</div>
							<h3 className='text-lg font-bold text-ink'>{post.title}</h3>
							<p className='text-sm leading-relaxed text-body'>{post.excerpt}</p>
						</article>
					))}
				</div>

				<Button href='#'>Read all articles</Button>
			</Container>
		</section>
	)
}
