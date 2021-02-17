import * as React from 'react'
import {useState} from 'react'
import {animateScroll, Link as Scroller} from 'react-scroll'
import './Navbar.css'
import {isPortrait} from '../App'


export function Navbar() {
	const [drawerVisible, setDrawerVisible] = useState(false)

	function toggleDrawer() {
		setDrawerVisible(!drawerVisible)
	}

	function hideDrawer() {
		setDrawerVisible(false)
	}

	return <nav>
		<div className="nav_container">
			<div className="logo_side">
				<Scroller to=""  smooth={true} className="logo_container" onClick={() => {
					animateScroll.scrollToTop()
					hideDrawer()
				}}>
					<img className="logo" src="/images/logo_alpha.png" alt="logo"/>
					{/*<img className="logo" src="/images/logo.png" alt="logo"/>
				<div className="text_container">
					<div className="title">LOZES</div>
					<div className="subtitle">ÉLECTRICITÉ GÉNÉRALE</div>
				</div>*/}
				</Scroller>
			</div>
			{isPortrait() && <div className="mobile" onClick={toggleDrawer}>
                <i className={drawerVisible ? "fas fa-times" : "fas fa-bars"}/></div>
			}
			{!isPortrait() && <div className="trapezoid"/>}
			<div
				className={isPortrait() && drawerVisible ? "links_side drawer_visible" : "links_side"}>
				<div className="links_container">
					<Scroller to="" smooth={true} className="link"
							  onClick={() => {
							  	animateScroll.scrollToTop()
							  	hideDrawer()
							  }}>
						ACCUEIL
					</Scroller>
					<Scroller to="services" smooth={true} onClick={hideDrawer} offset={-window.screen.height * .09}
							  className="link">SERVICES</Scroller>
					<Scroller to="contact" smooth={true} onClick={hideDrawer} offset={-window.screen.height * .09}
							  className="link">CONTACT</Scroller>
				</div>
			</div>
		</div>
	</nav>

}
