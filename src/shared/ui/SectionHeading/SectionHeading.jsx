export function SectionHeading({
	eyebrow,
	title,
	text,
	align = 'left',
	accentWords,
	className = ''
}) {
	const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

	// Wrap any word/phrase listed in accentWords with the teal accent color.
	const renderTitle = () => {
		if (!accentWords?.length) return title
		let parts = [title]
		accentWords.forEach((word) => {
			parts = parts.flatMap((part) => {
				if (typeof part !== 'string') return [part]
				const split = part.split(word)
				if (split.length === 1) return [part]
				return split.flatMap((chunk, i) =>
					i < split.length - 1
						? [chunk, <span key={`${word}-${i}`} className='text-accent'>{word}</span>]
						: [chunk]
				)
			})
		})
		return parts
	}

	return (
		<div className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
			{eyebrow && (
				<span className='text-xs font-bold tracking-[0.2em] text-body uppercase'>{eyebrow}</span>
			)}
			{title && (
				<h2 className='text-3xl leading-tight font-bold text-ink sm:text-4xl'>
					{renderTitle()}
				</h2>
			)}
			{text && <p className='text-base leading-relaxed text-body'>{text}</p>}
		</div>
	)
}
