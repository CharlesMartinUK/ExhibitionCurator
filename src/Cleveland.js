
//https://openaccess-api.clevelandart.org

class Cleveland  {

	constructor() {
		//this.url = 'https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=10&q='
		this.itemUrl = "https://openaccess-api.clevelandart.org/api/artworks/"
	}

	getURL(page) {
		return 'https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=10&skip='+ ((page-1)*10) + '&q='
		
	}

	process(result)   { 
		
		//const response = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats");
		// const result = await response.json();
		//console.log("top "+result)
		 // this.r = result
		 
		let r = []
		let counter = 0
		for(let t of result.data) {
			
			//let img = ""
			
			//if (t.images.web.url != undefined) 
			//img = t.images.web.url 
			// cleveland does not appear to be any any low res images, site just scales bigger image down (I think)
			r.push( {title:t.title, imageData: t.images.web.url  , text:t.tombstone, musId:t.id, id:counter++ }  )
			//console.log(t.images.web.url)
			//title:t.title, text:t.tombstone, , musId:t.id, id:0
			
		}
		
		//console.log(r)
		
		let np = parseInt(result.info.total / 10)
		if(np <= 0) np = 1
		
		//let compPage = Math.ceil(result.info.parameters.skip / 10)
		//if(compPage < 0) compPage = 1
		
		return {sr:r, numPages: np, 
				pageSize: 10,
				numRecords: r.length
				//page:compPage
				}
		 
	}		
	
	itemProcess(data) {
		
		let t= data.data
		
		return {title: t.title,   description: t.description, 
			imageURL: t.images.web.url,
			creationDate: t.creation_date,
			origin: t.culture[0],
			location: "",
			systemNumber:t.id
			//src:"cma"
			}
		
		
	}
	
	
	
}	
		
export default Cleveland 