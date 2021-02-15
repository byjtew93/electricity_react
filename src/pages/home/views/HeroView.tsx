import React, {useState} from 'react'
import './HeroView.css'

export function HeroView() {

	const [backgroundImagesVisible, setBackgroundImagesVisible] = useState(1)
	function incrementBackgroundImagesVisible() {
		for(let i=1; i<=5; i++)
			setTimeout(function() {
				setBackgroundImagesVisible(i+1)
				console.log("Updated num " + i)
			}, i*1500)
	}

	return <div className="HeroView" id="hero">
		<div className="pic-ctn">
			<img src={backgroundImagesVisible > 0 ? "/images/b01.jpg" : ""} alt="" className="pic" onLoad={incrementBackgroundImagesVisible}/>
			<img src={backgroundImagesVisible > 1 ? "/images/b02.jpg" : ""} alt="" className="pic"/>
			<img src={backgroundImagesVisible > 2 ? "/images/b03.jpg" : ""} alt="" className="pic"/>
			<img src={backgroundImagesVisible > 3 ? "/images/b04.jpg" : ""} alt="" className="pic"/>
			<img src={backgroundImagesVisible > 4 ? "/images/b05.jpg" : ""} alt="" className="pic"/>
		</div>
		<div className="color_filter_container">
			<div className="container">
				<div className="top_container">
					<div className="item">
						<div className="container">
							<img className="icon" src="/images/wire.svg" alt="wire"/>
							<div className="title">Installation</div>
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
							<div className="title">Bilan énergétique</div>
							<div className="spacer_bar"/>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

}
