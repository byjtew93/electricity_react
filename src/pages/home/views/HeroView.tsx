import React from 'react'
import './HeroView.css'

export function HeroView() {
	return <div className="HeroView" id="hero">
		<div className="pic-ctn">
			<img
				src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
				alt="" className="pic"/>
			<img
				src="https://images.pexels.com/photos/4276182/pexels-photo-4276182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="" className="pic"/>
			<img
				src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="" className="pic"/>
			<img
				src="https://images.pexels.com/photos/1583656/pexels-photo-1583656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="" className="pic"/>
			<img
				src="https://images.pexels.com/photos/1583657/pexels-photo-1583657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt="" className="pic"/>
		</div>
		<div className="color_filter_container">
			<div className="container">
				<div className="top_container">
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/wire.svg" alt="wire"/>
							<div className="title">Création </div>
							<div className="spacer_bar"/>
						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/glove.svg" alt="wire"/>
							<div className="title">Mise en sécurité</div>
							<div className="spacer_bar"/>
						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/light-bulb.svg" alt="wire"/>
							<div className="title">Dépannage</div>
							<div className="spacer_bar"/>
						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/transfer-switch.svg" alt="wire"/>
							<div className="title">Mise aux normes</div>
							<div className="spacer_bar"/>
						</div>
					</div>
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/energy-class.svg" alt="wire"/>
							<div className="title">Économie d'énergie</div>
							<div className="spacer_bar"/>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	/*
	<div className="HeroView" id="hero">
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
*/

}
