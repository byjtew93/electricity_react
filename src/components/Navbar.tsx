import * as React from 'react'
import {Link as Scroller, animateScroll} from 'react-scroll'
import './Navbar.css'

export function Navbar() {
	return <nav>
		<div className="nav_container">
			<Scroller to="topbar" smooth={true} className="logo_container">
				<img className="logo" src="/images/logo.png" alt="logo"/>
				<div className="text_container">
					<div className="title">LOZES</div>
					<div className="subtitle">ÉLECTRICITÉ GÉNÉRALE</div>
				</div>
			</Scroller>
			{/*<div className="triangle_container"><div className="triangle-right"/></div>*/}
			<div className="links_container">
				<Scroller to="#" smooth={true} className="link" onClick={animateScroll.scrollToTop}>ACCUEIL</Scroller>
				<Scroller to="services" smooth={true} offset={-window.screen.height*.09} className="link">SERVICES</Scroller>
				<Scroller to="contact" smooth={true} offset={-window.screen.height*.09} className="link">CONTACT</Scroller>
			</div>
		</div>
	</nav>

}
