import React from 'react'
import './Home.css'
import {HeroView} from "./views/HeroView";
import {ServicesView} from "./views/ServicesView";
import {ContactView} from "./views/ContactView";
import LazyLoad from 'react-lazyload';

export function Home() {
	return <div className="Home">
		<HeroView/>
		<ServicesView/>
		<LazyLoad once offset={100}>
			<ContactView/>
		</LazyLoad>
	</div>
}
