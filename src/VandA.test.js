import VAndA from './VAndA'


describe("Test V and A data processing",()=> {

	test("basic feature check ",() => {
		
		let v = new VAndA()
		
		expect(v.getURL).toBeDefined()
		expect(v.itemUrl).toBeDefined()
	})


	test ("test process",() => {
		let v = new VAndA()
		
		let r = v.process( {
			info: {
				pages:1,
				page:1,
				page_size:15,
				record_count:2
			},
			records: [{
				systemNumber:123456,
				_primaryTitle:"MyTitle",
				_images: {_primary_thumbnail:"MyThumbnail" }
			},
			{
				systemNumber:9999,
				_primaryTitle:"MyTitle9999",
				_images: {_primary_thumbnail:"MyThumbnail9999" }
			}]
			
			
		}   )
		//console.log(r)
		expect(r).toBeDefined()
		expect(r.sr).toHaveLength(2)
		expect(r.page).toBe(1)
		
		expect(r.sr[0].musId).toBe(123456)
		expect(r.sr[0].title).toBe("MyTitle")
		expect(r.sr[0].imageData).toBe("MyThumbnail") 
		
		
		//check second one
		expect(r.sr[1].musId).toBe(9999)
		expect(r.sr[1].title).toBe("MyTitle9999")
		expect(r.sr[1].imageData).toBe("MyThumbnail9999") 
		
	})
	
	test("get item",()=> { 
		let v = new VAndA()
		let r = v.itemProcess({ "meta": {images:{ "_iiif_image":"IsTheImage" } },
			
			record: {
				systemNumber:99999,
				summaryDescription:"Big Picture",
				titles:[ {title:"IMadeTHis"} ],
				productionDates:[  {date:{text:1999}}  ],
				
				placesOfOrigin:[ {place:{text:"London"} } ],
				galleryLocations:[ {current: {text:"MyHouse"}} ],
			}
		
		})
	
		expect(r.systemNumber).toBe(99999)
		expect(r.title).toBe("IMadeTHis")
		expect(r.description).toBe("Big Picture")
		expect(r.creationDate).toBe(1999)
		expect(r.origin).toBe("London")
		expect(r.location).toBe("MyHouse")
		//expect(r.src).toBe("va")
		expect(r.imageURL).toBe("IsTheImage" + '/full/full/0/default.jpg')
	
		//console.log(r)
	
	} )	
	
	test("get item missing title",() => {
		let v = new VAndA()
		let r = v.itemProcess({ "meta": {images:{ "_iiif_image":"IsTheImage" } },
			
			record: {
				systemNumber:99999,
				summaryDescription:"Big Picture",
				titles:[ ], // missing titles
				productionDates:[  {date:{text:1999}}  ],
				
				placesOfOrigin:[ {place:{text:"London"} } ],
				galleryLocations:[ {current: {text:"MyHouse"}} ],
			}
		
		})
	
		expect(r.title).toBe("")
	
	})
	
	

}) 