import React, {useState} from 'react'
import './Home.css'
import {HeroView} from "./views/HeroView";
import {ServicesView} from "./views/ServicesView";
import {ContactView} from "./views/ContactView";

export function Home() {
	return <div className="Home">
		<HeroView/>
		<ServicesView/>
		<ContactView/>
	</div>
}
