import React from 'react';

import { Outlet, Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SearchControls({search,searchChanged,searchText,srcChanged}) {

	const [searchDisabled,setSearchDisabled] = React.useState(true) // this could cone with normal variable
	const [searchParams, setSearchParams] = useSearchParams();

	function searchEdit(event) {
		//console.log(event.target.value.length)
		
		if(event.target.value.length > 0) setSearchDisabled( false)
			
		else setSearchDisabled(true)
		
		searchChanged(event.target.value)
		
	}
	 
	let srcAPI =  searchParams.get("src") 
	
	if(srcAPI == undefined) srcAPI = 'va'
	 
	//let st = searchParams.get("q") 
	// if(st == undefined) st = ""
	   
	function mySearch(event) {
		event.preventDefault()// stop reloading of form
		
		search(searchText)
	}

	//console.log(searchDisabled)
	function selected(event) {
		 srcChanged(event.target.value)
	}

	

	return (
		<>
		<form onSubmit={mySearch} >
			
			<Form.Control type="text" onChange={searchEdit} value={searchText} maxLength={20} placeholder="Search"  className="searchTextbox" data-bs-theme="dark"/> 
			
			
			<Form.Select className="apiSelect" onChange={selected} value={srcAPI} aria-label="Default select example" data-bs-theme="dark">
				<option value="va">Victoria and Albert</option>
				<option value="cma">Cleveland Museum of Art</option>
			</Form.Select>
			
			<Button type="button" onClick={mySearch} disabled={searchText.length <= 0}  variant="dark">Search</Button>
			<div style={{display:"inline",textAlign:"right",width:"300px", border:"1px solid red"}}>
			<Link to="/Gallery" >View Gallery</Link>
			</div>
		</form>
		
		<hr />
		</>
	)

}

export default SearchControls