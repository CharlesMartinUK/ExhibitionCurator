import React from 'react';
//import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import View from "./pages/View.jsx";
import NoPage from "./pages/NoPage.jsx";
import Search from "./pages/Search.jsx";
import Gallery from "./pages/Gallery.jsx";

import './App.css'

function App() {
 
	return (
		<>
			<BrowserRouter>
			
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />  
						<Route path="search" element={<Search />} />
						<Route path="view" element={<View />} />
						<Route path="gallery" element={<Gallery />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)	
}

export default App
