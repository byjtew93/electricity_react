import * as React from 'react';
import './ServiceView.css'
import LazyLoad from "react-lazyload";

export function ServicesView() {
	return <div className="ServicesView" id="services">
		<div className="container">
			<div className="title">PRESTATIONS</div>
			<LazyLoad once offset={20}>
			<div className="blocks">
				<div className="block">
					<img src="/images/small01.jpg" className="image" alt="first"/>
					<div className="block_container">
						<div className="block_title"><h1>RÉNOVATION ET CRÉATION</h1></div>
						<div className="block_description"><h1>
							Création de lignes électriques et rénovation d'installation existante
							sont notre corps de métiers depuis plus de 20 ans.
						</h1></div>
					</div>
				</div>
				<div className="block">
					<video src="/images/bulb_fast.mp4" autoPlay loop muted className="image"/>
					<div className="block_container">
						<div className="block_title"><h1>RECHERCHE DE PANNE</h1></div>
						<div className="block_description"><h1>
							Installation défaillante ou curiosité électrique ?<br/>
								Rien ne nous résiste !
						</h1></div>
					</div>
				</div>
				<div className="block">
					<img src="/images/small03.jpg" className="image" alt="third"/>
					<div className="block_container">
						<div className="block_title"><h1>SPÉCIALISTE HÔTELLERIE</h1></div>
						<div className="block_description"><h1>
							Spécialiste des normes électriques de sécurité
							de l'hôtellerie française.
						</h1></div>
					</div>
				</div>
			</div>
			</LazyLoad>
		</div>
	</div>

}
