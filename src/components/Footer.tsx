import * as React from 'react'
import './Footer.css'
import {Link} from "react-router-dom";

export function Footer() {
	return <footer>
		<div className="block left">
			<div className="footer_container">
				<h5 className="title">LE SITE</h5>
				<div className="links">
					<a href="https://byjtew93.github.io/" className="link">@ 2021 - Webmestre - Benjamin Lozes</a>
				</div>
			</div>
		</div>
		<div className="block center">
			<div className="footer_container">
				<h5 className="title">INFORMATIONS LÉGALES</h5>
				<div className="links">
					<Link to="/legal#mentions" className="link">Mentions légales</Link>
					<Link to="/legal#conditions" className="link">Conditions d'utilisation</Link>
				</div>
			</div>
		</div>
		<div className="block right">
			<div className="footer_container">
				<h5 className="title">PARTENAIRES</h5>
				<div className="links">
					<a href="https://www.yesss-fr.com/" className="link">
						Yesss Électrique
					</a>
					<a href="https://www.laplateforme.com/depot/details/11/toulouse-zi-chapitre" className="link">
						La Plateforme du Bâtiment
					</a>
				</div>
			</div>
		</div>
	</footer>

}
