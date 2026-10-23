// Small white card with an icon + stat/label that overlaps hero photos,
// e.g. "98% client satisfaction".
export function StatBadge({ icon: Icon, value, label, className = '' }) {
	return (
		<div
			className={`flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_12px_32px_-8px_rgba(30,30,90,0.18)] ${className}`}
		>
			{Icon && (
				<span className='flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent'>
					<Icon className='size-5' />
				</span>
			)}
			<div className='leading-tight'>
				<p className='text-lg font-bold text-ink'>{value}</p>
				<p className='text-xs text-body'>{label}</p>
			</div>
		</div>
	)
}
