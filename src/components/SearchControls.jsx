import React from 'react';

import { useSearchParams } from "react-router-dom";

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
		<div>
		<form onSubmit={mySearch}>
			<input type="text" onChange={searchEdit} value={searchText} maxLength={20}/> 
			<label>
			Collection: 
			<select onChange={selected} value={srcAPI}>
				<option value="va">Victoria and Albert</option>
				<option value="cma">Cleveland Museum of Art</option>
			</select>
			</label>
			<button type="button" onClick={mySearch} disabled={searchText.length <= 0}>Search</button>
		</form>
		</div>
	)

}

export default SearchControls