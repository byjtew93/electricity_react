import * as React from 'react'
import './Topbar.css'
import {Global} from "../Global";
import {isPortrait} from '../App'

export function Topbar() {
	return <div className="Topbar" id="topbar">
		<div className="container">
			<a href={"tel:" + Global.phoneNumberWithInd} className="item_container link">
				<i className="fas fa-phone-alt"/>
				<div className="text">{Global.phoneNumberParsed}</div>
			</a>
			<a href={"mailto:" + Global.mailAddress} className="item_container link">
				<i className="fas fa-at"/>
				<div className="text">{Global.mailAddress}</div>
			</a>
			{!isPortrait() &&
				<div className="item_container">
					<i className="fas fa-map-marker-alt"/>
					<div className="text">{Global.locationAddress}</div>
				</div>}
		</div>
	</div>
}
