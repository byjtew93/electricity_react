import * as React from 'react'
import './HeroView.css'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact"

export function HeroView() {
	return <div className="HeroView" id="hero">
		<div className="color_filter_container">
			<div className="container">
				<div className="top_container">
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/wire.svg" alt="wire"/>
							<div className="title">Création </div>

						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/glove.svg" alt="wire"/>
							<div className="title">Mise en sécurité</div>
						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/light-bulb.svg" alt="wire"/>
							<div className="title">Dépannage</div>
						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/transfer-switch.svg" alt="wire"/>
							<div className="title">Mise aux normes</div>
						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/energy-class.svg" alt="wire"/>
							<div className="title">Économie d'énergie</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

}
