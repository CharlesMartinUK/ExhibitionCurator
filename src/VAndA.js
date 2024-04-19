
class VAndA {

	constructor() {
		//images_exist=1& means only stuff with images
		//this.url = 'https://api.vam.ac.uk/v2/objects/search?images_exist=1&page=1&q_object_title='
		this.itemUrl = 'https://api.vam.ac.uk/v2/object/'
	}

	getURL(page) {
		
		return 'https://api.vam.ac.uk/v2/objects/search?images_exist=1&page='+ page  +'&q_object_title='
	}


	process(result)  { 
		
		let info = result.records
					
		let filt = [] // not using var here causes weirdness
		
		for (let i =0; i <  info.length;i++) {
			
			let t = info[i]
														
			filt.push({ title:t._primaryTitle, 
						id: i, 
						musId: t.systemNumber, 
						text: "", 
						imageData:  "_primary_thumbnail" in t._images ? t._images._primary_thumbnail :""  
			} )
			
		}
		
		//console.log(filt) 
			
		return {sr:filt, numPages: result.info.pages, 
				pageSize: result.info.page_size,
				numRecords:result.info.record_count,
				page:result.info.page
				}
	}
	
	// use system number
	// to get json with info 
	//https://iiif.vam.ac.uk/collections/{systemNumber}/manifest.json NOPE NOT THIS
	//https://api.vam.ac.uk/docs#/SystemNumber/collection_object_v2_object_O_object_num__get
	
	itemProcess(data) {
		
		let t = data.record
		//console.log("got back ",t.titles[0].title + "  " +   t.physicalDescription  )
		
		let imgURL= ""
		
		if("_iiif_image" in data.meta.images) {
			imgURL = data.meta.images._iiif_image + '/full/full/0/default.jpg'
		}
		
		//console.log(  t.galleryLocations[0].current.text )
		
		return {title: t.titles[0].title,   description: t.summaryDescription, 
			imageURL: imgURL,
			creationDate: t.productionDates[0].date.text,
			origin: t.placesOfOrigin[0].place.text,
			location: t.galleryLocations[0].current.text,
			systemNumber:t.systemNumber
			//src:"va"
			}
	}
		
}	
		
export default VAndA