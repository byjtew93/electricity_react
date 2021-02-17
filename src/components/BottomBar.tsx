import * as React from 'react'
import {useState} from 'react'
import './BottomBar.css'

export function BottomBar() {

	const [bottomBarVisible, setBottomBarVisible] = useState(true)

	function dismissBar() {
		setBottomBarVisible(false)
	}

	return bottomBarVisible ?
		<div className="BottomBar">
			<div className="container">
				<div className="text">Ce site n'utilise aucun cookie. Aucune de vos données ne seront conservées</div>
				<div className="button" onClick={dismissBar}>Je comprends</div>
			</div>
		</div>
		:
		<></>


	/*<CookieConsent
		location="bottom"
		buttonText="J'accepte"
		cookieName="myAwesomeCookieName2"
		style={{background: "#2B373B", overflowWrap: "break-word"}}
		buttonStyle={{
			color: "#0C0C0C",
			fontSize: "1em",
			margin: '0',
			padding: '.5vh 2vw',
			backgroundColor: 'green'
		}}
		contentStyle={{margin: '0', fontSize: '1em'}}
		expires={0}
		debug={false}
	>
		Ce site utilise des cookies afin d'améliorer votre expérience. Aucune de vos données ne seront
		conservées{" "}
		<span style={{fontSize: "10px", overflowWrap: "break-word"}}/>
	</CookieConsent>*/

}

