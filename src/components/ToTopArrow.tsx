import {animateScroll} from 'react-scroll'
import * as React from 'react'
import {useState} from 'react'
import './ToTopArrow.css'

export function ToTopArrow() {
	const [showScroll, setShowScroll] = useState(false)
	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > window.screen.height / 2)
			setShowScroll(true)
		else if (showScroll && window.pageYOffset < window.screen.height / 2)
			setShowScroll(false)
	};
	window.addEventListener('scroll', checkScrollTop)

	return <div className={showScroll ? "ToTopArrow visible" : "ToTopArrow hidden"}
				onClick={() => animateScroll.scrollToTop()}>
		<i className="fas fa-chevron-up"/>
	</div>

}
