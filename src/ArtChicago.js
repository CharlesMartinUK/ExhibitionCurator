// https://zacagross.wordpress.com/2018/05/12/how-to-use-the-metropolitan-museum-of-arts-collection-listing-api/
//https://nordicapis.com/how-museums-are-using-apis-to-inspire-art-lovers-worldwide/
//offical page ( https://metmuseum.github.io ) does not show use of collectionlisting




class ArtChicago {

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
		
		for(let t of result.data) {
			
			let img = ""
			
			/*
			if("images" in t) {
				if("web" in t.images) {
					if("url" in t.images.url) {
						console.log(t.images.web.url)
						img = t.images.web.url
					}
				}
			}*/
			
						
			r.push( {title:t.title, imageData: img , text:t.tombstone, musId:t.id, id:0 }  )
			//console.log(t.images.web.url)
			//title:t.title, text:t.tombstone, , musId:t.id, id:0
			
		}
		
		console.log(r)
		
		
		return {sr:r, numPages: 10, 
				pageSize: 10,
				numRecords: 10,
				page:1
				}
		 
	}		
	
	itemProcess(data) {
		
		let t= data.data
		
		return {title: t.title,   description: t.description, 
			imageURL: t.images.web.url,
			creationDate: t.creation_date,
			origin: t.culture[0],
			location: "",
			systemNumber:t.id,
			src:"cl"
			}
		
		
	}
	
	
	
}	
		
export default ArtChicago