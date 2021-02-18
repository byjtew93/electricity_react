import * as React from 'react'
import './Topbar.css'
import {Global} from "../Global";
import {isPortrait} from '../App'

export function Topbar() {
	return <div className="Topbar" id="topbar">
		<div className="container">
			<a href={"tel:" + Global.phoneNumberWithInd} className="item_container link">
				<i className="fas fa-phone-alt"/>
				<div className="topbar_text"><h1>{Global.phoneNumberParsed}</h1></div>
			</a>
			<a href={"mailto:" + Global.mailAddress} className="item_container link">
				<i className="fas fa-at"/>
				<div className="topbar_text"><h1>{Global.mailAddress}</h1></div>
			</a>
			{!isPortrait() &&
				<div className="item_container">
					<i className="fas fa-map-marker-alt"/>
					<div className="topbar_text"><h1>{Global.locationAddress}</h1></div>
				</div>}
		</div>
	</div>
}
