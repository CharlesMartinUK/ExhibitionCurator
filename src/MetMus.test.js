
import MetMus from './MetMus.js'




describe("test for MetMus",() => {

	test("testing stuff",async () => {
	
		/*
		async function test () {
		  const response = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats");
		  const movies = await response.json();
		  
		  
		 console.log(movies);
		 
		 
		 let a = 1
		
		expect(a).toBe(1)
		  //return movies
		}
		*/
		
			// get id
		 
		 
		 
		//console.log(works)
		 
		 let a = 1
		
		expect(a).toBe(1)
	
		/*
		//copy and pasted raw data
		let data = {"request":{"q":"\"carry bag\"","showOnly":null,"artist":null,"material":null,"era":null,"geolocation":null,"department":null,"pkgIds":null,"exhibitionId":null,"feature":null,"searchField":null,"page":1,"pageId":"00000000-0000-0000-0000-000000000000","perPage":20,"offset":0,"sortOrder":null,"sortBy":null,"queryParameters":null},"results":[{"title":"Title page: men carrying bags across a rowboat and onto shore in center, one man carrying two bags in right in the foreground, ships to left and right in the background, from &#39;Views of seaports&#39; (Vues de ports de mar)","description":"Stefano della Bella (Italian, Florence 1610–1664 Florence)","artist":"Stefano della Bella","culture":"","teaserText":"<p>Stefano della Bella (Italian, Florence 1610–1664 Florence) </p><p>Date: 1647<br/>Accession Number: 2012.136.552.5</p>","url":"/art/collection/search/413347?&ft=%22carry+bag%22&offset=0&rpp=20&amp;pos=1","image":"https://images.metmuseum.org/CRDImages/dp/mobile-large/DP828058.jpg","regularImage":"dp/web-additional/DP828058.jpg","largeImage":"dp/web-large/DP828058.jpg","date":"1647","medium":"Etching","accessionNumber":"2012.136.552.5","galleryInformation":"Not on view"},{"title":"Runners Bottle","description":" ","artist":"","culture":"Moche","teaserText":"<p>Date: 4th–7th century<br/>Accession Number: 67.167.3</p>","url":"/art/collection/search/318617?&ft=%22carry+bag%22&offset=0&rpp=20&amp;pos=2","image":"https://images.metmuseum.org/CRDImages/ao/mobile-large/DP227393.jpg","regularImage":"ao/web-additional/DP227393.jpg","largeImage":"ao/web-large/DP227393.jpg","date":"4th–7th century","medium":"Ceramic","accessionNumber":"67.167.3","galleryInformation":"Not on view"},{"title":"Wellfield House, Anderston (Glasgow)","description":"Sir David Young Cameron (British, Glasgow, Scotland 1865–1945 Perth, Scotland)","artist":"Sir David Young Cameron","culture":"","teaserText":"<p>Sir David Young Cameron (British, Glasgow, Scotland 1865–1945 Perth, Scotland) </p><p>Date: 1891<br/>Accession Number: 17.3.3044</p>","url":"/art/collection/search/707167?&ft=%22carry+bag%22&offset=0&rpp=20&amp;pos=3","image":"/content/img/placeholders/NoImageAvailableIcon.png","regularImage":"/content/img/placeholders/NoImageAvailableIcon.png","largeImage":"/content/img/placeholders/noimage534x534.png","date":"1891","medium":"Etching; only state","accessionNumber":"17.3.3044","galleryInformation":"Not on view"},{"title":"A procession of men, women and children carrying bags, buckets and barrels, a man sounding a buccina at left, after Polidoro da Caravaggio","description":"Pietro Santi Bartoli (Italian, Perugia 1615–1700 Rome)","artist":"Pietro Santi Bartoli","culture":"","teaserText":"<p>Pietro Santi Bartoli (Italian, Perugia 1615–1700 Rome) </p><p>Date: 1650–91<br/>Accession Number: 51.501.848</p>","url":"/art/collection/search/676025?&ft=%22carry+bag%22&offset=0&rpp=20&amp;pos=4","image":"/content/img/placeholders/NoImageAvailableIcon.png","regularImage":"/content/img/placeholders/NoImageAvailableIcon.png","largeImage":"/content/img/placeholders/noimage534x534.png","date":"1650–91","medium":"Etching","accessionNumber":"51.501.848","galleryInformation":"Not on view"},{"title":"Palma with textile motif","description":" ","artist":"","culture":"Veracruz","teaserText":"<p>Date: 7th–9th century<br/>Accession Number: 1979.206.425</p>","url":"/art/collection/search/312645?&ft=%22carry+bag%22&offset=0&rpp=20&amp;pos=5","image":"https://images.metmuseum.org/CRDImages/ao/mobile-large/DP104834.jpg","regularImage":"ao/web-additional/DP104834.jpg","largeImage":"ao/web-large/DP104834.jpg","date":"7th–9th century","medium":"Stone, pigment\nHazardous materials: contains mercury and lead\n","accessionNumber":"1979.206.425","galleryInformation":"Not on view"}],"facets":[{"filterGroupId":null,"filterGroupType":null,"filterGroupLabel":null,"filterGroupName":null,"filterGroupItems":null,"id":"artist","label":"Artist / Culture","searchable":true,"name":null,"values":[{"id":"Bartoli, Pietro Santi$Pietro Santi Bartoli","label":"Pietro Santi Bartoli","name":"Bartoli, Pietro Santi","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Bella, Stefano della$Stefano della Bella","label":"Stefano della Bella","name":"Bella, Stefano della","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Cameron, David Young, Sir$Sir David Young Cameron","label":"Sir David Young Cameron","name":"Cameron, David Young, Sir","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Caravaggio, Polidoro da$Polidoro da Caravaggio","label":"Polidoro da Caravaggio","name":"Caravaggio, Polidoro da","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Henriet, Israël$Israël Henriet","label":"Israël Henriet","name":"Henriet, Israël","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Moche","label":"Moche","name":"Moche","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Rossi, Giovanni Giacomo De$Giovanni Giacomo De Rossi","label":"Giovanni Giacomo De Rossi","name":"Rossi, Giovanni Giacomo De","count":1,"selected":false,"hidden":false,"orderId":0}],"facets":null},{"filterGroupId":null,"filterGroupType":null,"filterGroupLabel":null,"filterGroupName":null,"filterGroupItems":null,"id":"material","label":"Object Type / Material","searchable":true,"name":null,"values":[{"id":"Bottles","label":"Bottles","name":"Bottles","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Ceramics","label":"Ceramics","name":"Ceramics","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Etching","label":"Etching","name":"Etching","count":3,"selected":false,"hidden":false,"orderId":0},{"id":"Lead","label":"Lead","name":"Lead","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Mercury","label":"Mercury","name":"Mercury","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Metal","label":"Metal","name":"Metal","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Prints","label":"Prints","name":"Prints","count":3,"selected":false,"hidden":false,"orderId":0},{"id":"Sculpture","label":"Sculpture","name":"Sculpture","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Stone","label":"Stone","name":"Stone","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Vessels","label":"Vessels","name":"Vessels","count":1,"selected":false,"hidden":false,"orderId":0}],"facets":null},{"filterGroupId":null,"filterGroupType":null,"filterGroupLabel":null,"filterGroupName":null,"filterGroupItems":null,"id":"geolocation","label":"Geographic Location","searchable":true,"name":null,"values":[{"id":"Europe","label":"Europe","name":"Europe","count":2,"selected":false,"hidden":false,"orderId":0},{"id":"France","label":"France","name":"France","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Italy","label":"Italy","name":"Italy","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Mexico","label":"Mexico","name":"Mexico","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"North and Central America","label":"North and Central America","name":"North and Central America","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Peru","label":"Peru","name":"Peru","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"South America","label":"South America","name":"South America","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"Veracruz","label":"Veracruz","name":"Veracruz","count":1,"selected":false,"hidden":false,"orderId":0}],"facets":null},{"filterGroupId":null,"filterGroupType":null,"filterGroupLabel":null,"filterGroupName":null,"filterGroupItems":null,"id":"era","label":"Date / Era","searchable":false,"name":null,"values":[{"id":"A.D. 500-1000","label":"A.D. 500-1000","name":"4","count":1,"selected":false,"hidden":false,"orderId":0},{"id":"A.D. 1600-1800","label":"A.D. 1600-1800","name":"7","count":2,"selected":false,"hidden":false,"orderId":0},{"id":"A.D. 1800-1900","label":"A.D. 1800-1900","name":"8","count":1,"selected":false,"hidden":false,"orderId":0}],"facets":null},{"filterGroupId":null,"filterGroupType":null,"filterGroupLabel":null,"filterGroupName":null,"filterGroupItems":null,"id":"department","label":"Department","searchable":false,"name":null,"values":[{"id":"5","label":"Arts of Africa, Oceania, and the Americas","name":"Arts of Africa, Oceania, and the Americas","count":2,"selected":false,"hidden":false,"orderId":0},{"id":"9","label":"Drawings and Prints","name":"Drawings and Prints","count":3,"selected":false,"hidden":false,"orderId":0}],"facets":null}],"totalResults":5,"totalCollectionResults":519838,"fromCache":false,"isCorrected":false,"originalQuery":null,"correctedQuery":null,"urlCorrectionRequired":false}
		
		const mm = new MetMus()
		let r = mm.process(data)
		*/
		
		 //test()
		
		 
	})
	

})