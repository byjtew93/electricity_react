import * as React from 'react';
import {Link} from 'react-router-dom';
import './Topbar.css'

export function Topbar() {
	return <div className="Topbar">
		<div className="container">
			<Link to="tel:+33659927399" className="item_container link">
				<i className="fas fa-phone-alt"/>
				<div className="text">06 59 92 73 99</div>
			</Link>
			<Link to="mailto:stephanelozes@yahoo.fr" className="item_container link">
				<i className="fas fa-at"/>
				<div className="text">stephanelozes@yahoo.fr</div>
			</Link>
			<div className="item_container">
				<i className="fas fa-map-marker-alt"/>
				<div className="text">Toulouse, FR</div>
			</div>
		</div>
	</div>
}
