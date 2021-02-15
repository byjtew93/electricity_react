import * as React from 'react'
import './Footer.css'
import {Link} from "react-router-dom";

export function Footer() {



	return <footer>
		<div className="block left">
			<div className="container">
				<h5 className="title">LE SITE</h5>
				<div className="links">
					<Link to="https://byjtew93.github.io/" className="link">@ 2021 - Webmestre - Benjamin Lozes</Link>
				</div>
			</div>
		</div>
		<div className="block center">
			<div className="container">
				<h5 className="title">INFORMATIONS LÉGALES</h5>
				<div className="links">
					<Link to="/legal" className="link">Mentions légales</Link>
					<Link to="/legal" className="link">Conditions d'utilisation</Link>
				</div>
			</div>
		</div>
		<div className="block right">
			<div className="container">
				<h5 className="title">PARTENAIRES</h5>
				<div className="links">
					<Link to="https://www.yesss-fr.com/" className="link">
						Yesss Électrique
					</Link>
					<Link to="https://www.laplateforme.com/depot/details/11/toulouse-zi-chapitre" className="link">
						La Plateforme du Bâtiment
					</Link>
				</div>
			</div>
		</div>
	</footer>

}
