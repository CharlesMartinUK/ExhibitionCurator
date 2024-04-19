// https://zacagross.wordpress.com/2018/05/12/how-to-use-the-metropolitan-museum-of-arts-collection-listing-api/
//https://nordicapis.com/how-museums-are-using-apis-to-inspire-art-lovers-worldwide/
//offical page ( https://metmuseum.github.io ) does not show use of collectionlisting

class MetMus {

	constructor() {
		this.url = 'https://www.metmuseum.org/api/collection/collectionlisting?q='
	}

	process(result)  { 
		
		let info = result.results
					
		let filt = [] // not using var here causes weirdness
	
		for (let i =0; i <  info.length;i++) {
			let t = info[i]
			//console.log(i)
			
			let iDat = t.image
			
			if(iDat =='/content/img/placeholders/NoImageAvailableIcon.png')
				iDat = ""
			
			filt.push({ title:t.title, 
										id: i, 
										text: t.description, 
										imageData: iDat  
										} )
			//filt.push({title:t.title, id: t.id, text: t.thumbnail.alt_text, imageData: t.thumbnail.lqip , width:t.thumbnail.width, height:t.thumbnail.height  } )
		}
		
			//console.log(filt)
			
		let np = result.totalResults / result.request.perPage
		if(np < 1) np = 1
			
		return {sr:filt, 
				numPages: np, 
				pageSize: result.request.perPage,
				numRecords: result.totalResults,
				page:result.request.page
				} 
	}
}	
		
export default MetMus