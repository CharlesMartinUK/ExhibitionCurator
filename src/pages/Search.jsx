import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { loadData, reducer, State } from '../loader.js'

import SearchResults from '../components/SearchResults.jsx'
import Pagination from '../components/Pagination.jsx'

//import MetMus from '../MetMus.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {getSrcFromName} from '../sourceLocate.js'


const Search = () => {
	
	let location = useLocation();
	const navigate = useNavigate();
	
	const [searchParams, setSearchParams] = useSearchParams();
	const [state,dispatch] = React.useReducer(reducer,{details:[],error:false,loading:false})

	
	let searchText = searchParams.get("q")
	let pageNumber = parseInt( searchParams.get("page") )
	
	if((pageNumber == null) || ( Number.isNaN(pageNumber) )  ) pageNumber = 1
		
		
	let srcAPI = searchParams.get("src")
	if(srcAPI == null) srcAPI = 'va'
		
	//console.log("PAGE NUBER IS ",pageNumber)
		
	//console.log("search is ",searchText)
		
	function changePage(page) {
		//console.log("changeing to ",page," search ",searchText)
		navigate('/search?q='+searchText+"&page="+page+"&src="+srcAPI)
	}
	
	
	useEffect(() => {
		
		var v = getSrcFromName(srcAPI)  
			
		// quatation marks needed otherwise tv does not work, multilbke words not a problem
		//console.log("searching for ",searchText)
		
		//if(searchText.length > 0) //only search if something to search for
			loadData(v.getURL(pageNumber) + searchText , v.process, dispatch )   
		
		// needed to reload page when param changes DOES NOT WORK SOMETIMES after page reload
		// caused by browser caching?, only problem if code has been changed ???
	},[ location ]); 

	//console.log(state.details)
	
	switch (state) {
		
		case State.Error : 
			return  (<p>Error Loading Data</p> ) 
		case State.Loading :
			return <p>Loading..</p>
		//why state.loaded not working ???
	}


	return (  
		<div>
			<h1>Search Results</h1>
			
				{
					state.details.sr ? (
					state.details.sr.length > 0 ? (
					<div>
					<Pagination page={pageNumber} numPages={state.details.numPages} backClick={() => changePage(pageNumber-1)} forwardClick={() => changePage(pageNumber+1)}/>
						<Container>
							<Row>
							<SearchResults works={state.details.sr} src={state.details.api} /> 
							</Row>
						</Container>
								
						<Pagination page={pageNumber} numPages={state.details.numPages} backClick={() => changePage(pageNumber-1)} forwardClick={() => changePage(pageNumber+1)}/>
					</div>) : (<div>Nothing Found</div>)
					) : (  <p> Nothing found </p>)
				}
					
		</div>
		
	)
};

export default Search;