import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on every route change. When the new URL carries a
// #hash (e.g. a "Book a free session" link pointing at /#book from another
// page), scrolls the matching element into view instead, retrying briefly
// since the target section may not be mounted yet on the first paint.
export function ScrollToTop() {
	const { pathname, hash } = useLocation()

	useEffect(() => {
		if (!hash) {
			window.scrollTo(0, 0)
			return
		}

		const id = hash.slice(1)
		let attempts = 0
		const tryScroll = () => {
			const el = document.getElementById(id)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			} else if (attempts < 10) {
				attempts += 1
				requestAnimationFrame(tryScroll)
			}
		}
		tryScroll()
	}, [pathname, hash])

	return null
}
