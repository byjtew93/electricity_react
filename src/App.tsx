import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Footer} from "./components/Footer"
import {Home} from "./pages/home/Home"
import './App.css'
import {Navbar} from "./components/Navbar";
import {BottomBar} from "./components/BottomBar";
import {Topbar} from "./components/Topbar";
import { ToTopArrow } from './components/ToTopArrow'

export function isPortrait() {
	return window.screen.width < window.screen.height
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
			<Footer/>
		</BrowserRouter>
	</div>
}

export default App
