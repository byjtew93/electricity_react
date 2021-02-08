import * as React from 'react'
import {Link} from 'react-router-dom'
import {Link as Scroller} from 'react-scroll'
import './Navbar.css'

export function Navbar() {
	return <nav>
		<div className="nav_container">
			<div className="logo_container">
				<img className="logo" src="/images/logo.png" alt="logo"/>
				<div className="text_container">
					<div className="title">LOZES</div>
					<div className="subtitle">ÉLECTRICITÉ GÉNÉRALE</div>
				</div>
			</div>
			{/*<div className="triangle_container"><div className="triangle-right"/></div>*/}
			<div className="links_container">
				<Scroller to="" className="link">ACCUEIL</Scroller>
				<Scroller to="/" className="link">SERVICES</Scroller>
				<Scroller to="contact" className="link">CONTACT</Scroller>
			</div>
		</div>
	</nav>

}
