import * as React from 'react'
import './BottomBar.css'
import CookieConsent from "react-cookie-consent";

export function BottomBar() {
	return <CookieConsent
		location="bottom"
		buttonText="J'accepte"
		cookieName="myAwesomeCookieName2"
		style={{background: "#2B373B"}}
		buttonStyle={{color: "#4e503b", fontSize: "13px"}}
		expires={0}
		debug={true}
	>
		Ce site utilise des cookies afin d'améliorer votre expérience. Aucune de vos données ne seront conservées{" "}
		<span style={{fontSize: "10px"}}></span>
	</CookieConsent>

}
