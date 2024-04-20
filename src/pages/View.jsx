
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";


import {getSrcFromName} from '../sourceLocate.js'

import {loadData, reducer } from '../loader.js'
import Work from '../components/Work.jsx'
import {COOKIE_NAME, getCookie} from '../cookie.js'

const View = () => {
	
	const [state,dispatch] = React.useReducer(reducer,{details:[],error:false,loading:false})
	
	let [searchParams, setSearchParams] = useSearchParams();	
	
	
	useEffect(() => {
		
		//console.log("view src is ",  searchParams.get("vsrc")  )
		
		var v = getSrcFromName( searchParams.get("vsrc")  )
			
		
		loadData(v.itemUrl+ searchParams.get("id")  , v.itemProcess, dispatch)
				
	},[]); 
	
	function findDup(a) {
		
		for(let e of a) {
				//console.log("found:"+e)
			if(e.systemNumber === state.details.systemNumber) {
				if(e.src === state.details.src) {
					return true
				}
			}
		}
			
		return false
	}
	
	
	function addToGallery () {
	
		let st = getCookie()
		
		if(findDup(st) === false) {
			//console.log("adding")
			st.push(state.details)
			window.sessionStorage.setItem(COOKIE_NAME,  JSON.stringify(st) );
		}
		
	}
	
	
  return ( 
	<div>
		
		{ state.loading ? ( <div>Loading..</div> ): ( <div>
				  
		  <Work 
			title={state.details.title} 
			description={state.details.description}
			location={state.details.location}  
			origin={state.details.origin}
			creationDate={state.details.creationDate} 
			image={state.details.imageURL} 
			/>
		  
			<button type="button" onClick={addToGallery}  >Add To Gallery</button>
		</div> )   }
	</div>
  )
};

export default View;