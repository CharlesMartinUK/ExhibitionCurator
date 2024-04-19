import {getCookie} from './cookie.js'





afterAll(() => {
   global.Storage.prototype.getItem.mockReset()
});

describe("testing session cook",() => {

	test("get information back (no data)",() => {
		
		
		global.Storage.prototype.getItem = jest.fn((key) => {return null} )
		
		let r = getCookie()
		//console.log(r)
		expect(r).toHaveLength(0)
		
	})
	
	test("get information back (empty data)",() => {
		
		
		global.Storage.prototype.getItem = jest.fn((key) => {return "[]"} )
		
		let r = getCookie()
		//console.log(r)
		expect(r).toHaveLength(0)
		
	})

	test("get information back (2 records)",() => {
		
		global.Storage.prototype.getItem = jest.fn((key) => {
			
			return JSON.stringify( [{title:"title1",description:"description1",
			location:"location1",origin:"origin1",creationDate:"creationDate1",imageURL:"image1"},
					{title:"title2",description:"description2",
					location:"location2",origin:"origin2",creationDate:"creationDate2",imageURL:"image2"}] )
			
		} )
		
		let r = getCookie()
		//console.log(r)
		expect(r).toHaveLength(2)
		expect(r[0].title).toBe("title1")
		expect(r[0].description).toBe("description1")
		expect(r[0].location).toBe("location1")
		expect(r[0].origin).toBe("origin1")
		expect(r[0].creationDate).toBe("creationDate1")
		expect(r[0].imageURL).toBe("image1")
		
		
		
		expect(r[1].title).toBe("title2")
		expect(r[1].description).toBe("description2")
		expect(r[1].location).toBe("location2")
		expect(r[1].origin).toBe("origin2")
		expect(r[1].creationDate).toBe("creationDate2")
		expect(r[1].imageURL).toBe("image2")
		
	})


})