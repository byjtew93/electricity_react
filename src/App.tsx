import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Footer} from "./components/Footer"
import {Home} from "./pages/home/Home"
import './App.css'
import {Navbar} from "./components/Navbar";
import {BottomBar} from "./components/BottomBar";
import {Topbar} from "./components/Topbar";
import {ToTopArrow} from './components/ToTopArrow'
import LazyLoad from 'react-lazyload'

export function isPortrait() {
	return window.matchMedia("(orientation: portrait)").matches
}

function App() {
	const [showScroll, setShowScroll] = useState(false)
	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > window.innerHeight)
			setShowScroll(true)
		else if (showScroll && window.pageYOffset <= window.innerHeight)
			setShowScroll(false)
	};

	window.addEventListener('scroll', checkScrollTop)

	return <div className="App">
		<BrowserRouter>
			<Topbar/>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={Home}/>
			</Switch>
			{!isPortrait() && <ToTopArrow/>}
			<BottomBar/>
			<LazyLoad once offset={100}>
				<Footer/>
			</LazyLoad>
		</BrowserRouter>
	</div>
}

export default App
