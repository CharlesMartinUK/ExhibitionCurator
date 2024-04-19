
import React from 'react';
import Work from '../components/Work.jsx'
import {COOKIE_NAME, getCookie} from '../cookie.js'


const Gallery = () => {

	const [galleryWorks, setGalleryWorks] = React.useState(getCookie)

	function deleteWork(systemNumber,src) {
	
		//console.log("deleting "+systemNumber+" "+src)
		let t = window.sessionStorage.getItem(COOKIE_NAME)
		
		if(t != null) {
			let st = JSON.parse(t)
			
			let nst = st.filter ( (work) => {
				if( (work.systemNumber === systemNumber) && (work.src === src))
					return false
				return true
				//console.log("found:"+e)
			} )
			//console.log(nst)
		
			window.sessionStorage.setItem(COOKIE_NAME,  JSON.stringify( nst) );
			setGalleryWorks(nst)
		}
	}

	return (
		<div>
			{
				galleryWorks.map( (item) => {
					return (
						<div>
							<Work 
								title={item.title} 
								description={item.description} 
								origin={item.origin}
								creationDate={item.creationDate}
								location={item.location}
								image={item.imageURL}
							/>
					
							<button type="button" onClick={() => deleteWork(item.systemNumber, item.src) }>Delete</button>
						</div>
					)
				} )
			} 
			
		</div>
	)
			
	/*
	else return (
		<div>
			Nothing..
		</div>
	
	)*/
}

export default Gallery