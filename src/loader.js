//https://www.leighhalliday.com/mock-fetch-jest

// cannot get this state thing to work in search 
export class State {
	
	static LOADING = 1
	static LOADED = 2
	static ERROR = 3
}


export function reducer(state,action) {
		
	switch(action.type) {
			
		case State.LOADING:
			return {details: {}, loading:true, error:false}
		case State.LOADED:
			return {details: action.payload.details, loading:false, error:false}
		case State.ERROR:
			return {details:{}, loading:false, error:true}
			
		default:
			return state
	}
		
}


export async function loadData(completeURL,processData,dispatch) {
		 
	dispatch( {type:State.LOADING} )
	//console.log(completeURL)
		
	try {
				
		const response = await fetch(completeURL);
		//console.log(response)
			
		let result = await response.json();
						//console.log("done")
		let filt = processData(result)		
						
		dispatch({		type: State.LOADED, payload:{details: filt} });
		
	} catch(error) {
			//console.log(error);
		dispatch({type:State.ERROR})
	}
	  
}



export async function loadData2(completeURL,processData,pd2, dispatch) {
		 
	dispatch( {type:State.LOADING} )
	//console.log(completeURL)
		
	try {
				
		const response = await fetch(completeURL);
		//console.log(response)
			
		let result = await response.json();
						//console.log("done")
		
		//console.log(result)
		
		
		let filt = processData(result)	
		
		//console.log("filt is "+filt)
		
		/*
		const r2 = await fetch( "https://api.artic.edu/api/v1/artworks?ids="+filt)
		
		console.log(r2)
		const filt2 = pd2(r2,result)
		console.log("after")	
		*/
		
		dispatch({		type: State.LOADED, payload:{details: filt} });
		
	} catch(error) {
			//console.log(error);
		dispatch({type:State.ERROR})
	}
	  
}

