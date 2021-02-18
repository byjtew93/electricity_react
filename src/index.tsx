import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Helmet} from 'react-helmet';
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<Helmet>
			<title>Lozes Électricité</title>
			<meta name="description"
				  content="Société toulousaine d'électricité depuis plus de 20 ans. Spécialisée en hôtellerie et restauration grâce à un large éventail de compétences."/>
			<meta name="keywords"
				  content="électricité, électricien, electricien, electricite, toulouse, berat, carbonne, lherm, muret, electrique, hotel, depannage, dépannage, installation, prise, Toulouse, artisan"/>
		</Helmet>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
