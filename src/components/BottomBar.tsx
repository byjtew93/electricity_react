import * as React from 'react'
import CookieConsent from "react-cookie-consent";


export function BottomBar() {
	return <CookieConsent
		location="bottom"
		buttonText="J'accepte"
		cookieName="myAwesomeCookieName2"
		style={{background: "#2B373B"}}
		buttonStyle={{
			color: "#0C0C0C",
			fontSize: "1em",
			margin: '0',
			padding: '.5vh 2vw',
			backgroundColor: 'green'
		}}
		contentStyle={{margin: '0', fontSize: '1em'}}
		expires={0}
		debug={true}
	>
		Ce site utilise des cookies afin d'améliorer votre expérience. Aucune de vos données ne seront
		conservées{" "}
		<span style={{fontSize: "10px"}}/>
	</CookieConsent>

}

