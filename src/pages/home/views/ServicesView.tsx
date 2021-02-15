import * as React from 'react';
import './ServiceView.css'

export function ServicesView() {
	return <div className="ServicesView" id="services">
		<div className="container">
			<div className="title">MAIN TITLE</div>
			<div className="blocks">
				<div className="block">
					<img src="/images/small01.jpg" className="image" alt="IMAGE"/>
					<div className="block_container">
						<div className="block_title">RÉNOVATION ET CRÉATION</div>
						<div className="block_description">Création de lignes électriques et rénovation d'installation existante sont notre corps de métiers depuis plus de 20 ans
						</div>
					</div>
				</div>
				<div className="block">
					<img src="/images/flashing_bulb.gif" className="image" alt="IMAGE"/>
					<div className="block_container">
						<div className="block_title">RECHERCHE DE PANNE</div>
						<div className="block_description">Installation défaillante ou curiosité électrique ?<br/> Rien ne nous résiste !
						</div>
					</div>
				</div>
				<div className="block">
					<img src="/images/small03.jpg" className="image" alt="IMAGE"/>
					<div className="block_container">
						<div className="block_title">SPÉCIALISTE HÔTELLERIE</div>
						<div className="block_description">Spécialiste des normes électriques de sécurité
							 de l'hôtellerie française.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

}
