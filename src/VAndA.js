
class VAndA {

	constructor() {
		//images_exist=1& means only stuff with images
		//this.url = 'https://api.vam.ac.uk/v2/objects/search?images_exist=1&page=1&q_object_title='
		this.itemUrl = 'https://api.vam.ac.uk/v2/object/'
	}

	getURL(page) {
		//i only want paintings
		//&q_object_type=painting increase matchs for cat,  search mode narrow does not seem to work?
		return 'https://api.vam.ac.uk/v2/objects/search?images_exist=1&page='+ page  +'&images_exist=1&data_restrict=descriptive_only&q_object_name='
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
				page:result.info.page,
				api:"va"
				
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
		
		let title = ""
		
		if ("titles" in t) { // some works have no title (well nothing in title but guard against errors here)
			if(t.titles.length > 0) {
				title = t.titles[0].title
			}
		}
		
		//console.log(  t.galleryLocations[0].current.text )
		/*
		console.log("description: ",t.summaryDescription)
		console.log("image :",imgURL)
		console.log("creation date :",t.productionDates[0].date.text)
		console.log("origin ",t.placesOfOrigin[0].place.text)
		console.log("gallery location ",t.galleryLocations[0].current.text )
		console.log("system number",t.systemNumber)
		console.log("title ",title )
		*/
		//let des = ""//t.summaryDescription != undefined ? t.summaryDescription : ""
		return {title: title ,   description:  t.summaryDescription ,  
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