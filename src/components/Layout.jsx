import React from 'react';



import { Outlet, Link } from "react-router-dom";
import SearchControls from './SearchControls.jsx'
import { useNavigate } from 'react-router-dom';

import { useSearchParams } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import logo from '../assets/slogo.png'


const Layout = () => {
	
	const navigate = useNavigate();
	/*
          <li>
            <Link to="/view">View</Link>
          </li>*/
	const [searchParams, setSearchParams] = useSearchParams();
	
	

	const [searchText, setSearchText] = React.useState( searchParams.get("q") == undefined ? "" : searchParams.get("q") )
	
	
	//console.log("searchTest is " , searchText)
	
	let srcAPI = searchParams.get("src")
	if(srcAPI == null) srcAPI = 'va'
	
	//const [srcAPI,setSearchAPI] = React.useState(0)
	
	function search() {
		
		if(searchText.length <= 0) return
		//The Art Institute of Chicago
		//https://api.artic.edu/api/v1/artworks/search?q=cats
		//does not supply image
				
		//var t = new  VAndA() // MetMus() 
		//loadData(t.url + searchText , t.process )
		
		navigate('/search?q='+searchText+'&src='+srcAPI)
		
	}
 
	function searchChanged(text) {
		//console.log(event.target.value.length)
		setSearchText(text)
	}
 
		
	function sourceChanged(src){
		console.log("layout src changed: "+src)
		//setSearchAPI(num)
		//if(searchText.length <= 0) return
		//setSearchParams({"src":src}, false)
		// bug with empty search string
		navigate('/search?q='+searchText+'&src='+src)
	}

	
	return (
		<div >
			<Navbar id="main">
				<img src={logo} />
			
				<SearchControls search={search} searchChanged={searchChanged}  searchText={searchText} srcChanged={sourceChanged}/>
				
			</Navbar>

			<Outlet />
			bottom of page
		</div>
	)
};

export default Layout;