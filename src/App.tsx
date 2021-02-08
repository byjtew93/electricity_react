import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Footer} from "./components/Footer"
import {Home} from "./pages/home/Home"
import './App.css'
import {Navbar} from "./components/Navbar";
import {BottomBar} from "./components/BottomBar";
import {Topbar} from "./components/Topbar";

function App() {
	return <div className="App">
		<BrowserRouter>

			<Navbar/>
			<Topbar/>
			<Switch>
				<Route path="/" exact component={Home}/>
			</Switch>
			<BottomBar/>
			<Footer/>
		</BrowserRouter>
	</div>
}

export default App
