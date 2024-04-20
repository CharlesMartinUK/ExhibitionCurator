import Cleveland  from './Cleveland.js'

describe("Cleveland test",() => {


	test("basic member test",() => {
	
		let t = new Cleveland ()
		
		expect(t.getURL).toBeDefined()
		expect(t.itemUrl).toBeDefined()
	})


	test("get single work",()=> {
		let t = new Cleveland ()
		
		let data = {"info": {"total": 1, "parameters": {"skip": 0, "limit": 1000, "q": "\"beans mice\"", "has_image": "1", "select": "accession_number,accession_number_sortable,cover_accession_number,department,gallery,collection,department,classification_type", "search": "\"beans mice\""}}, "data": [{"id": 97254, "accession_number": "1916.885", "share_license_status": "CC0", "tombstone": "Inro (Case) with Mice and Beans, late 1800s. Japan, Meiji period (1868\u20131912). Lacquer on wood with color and sprinkled gold powder design (maki-e); diameter: 8.4 cm (3 5/16 in.). The Cleveland Museum of Art, Gift of D. Z. Norton 1916.885", "current_location": null, "title": "Inro (Case) with Mice and Beans", "title_in_original_language": "\u9f20\u306b\u8c46\u8494\u7d75\u5370\u7c60)", "creation_date": "late 1800s", "creation_date_earliest": 1870, "creation_date_latest": 1899, "artists_tags": [], "culture": ["Japan, Meiji period (1868\u20131912)"], "technique": "Lacquer on wood with color and sprinkled gold powder design (maki-e)", "support_materials": [], "department": "Japanese Art", "collection": "Japanese Art", "type": "Lacquer", "measurements": "Diameter: 8.4 cm (3 5/16 in.)", "dimensions": {"diameter": {"height": 0.084}}, "state_of_the_work": null, "edition_of_the_work": null, "copyright": null, "inscriptions": [], "exhibitions": {"current": [{"id": 455863, "title": "Animals in Japanese Art (Japanese art rotation)", "description": "<i>Animals in Japanese Art (Japanese art rotation)</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 24-December 10, 2023).", "opening_date": "2023-06-24T04:00:00"}], "legacy": []}, "provenance": [{"description": "D. Z. Norton [1851\u20131928], Cleveland, OH, given to the Cleveland Museum of Art", "citations": [], "footnotes": null, "date": "?\u20131916"}, {"description": "The Cleveland Museum of Art, Cleveland, OH", "citations": [], "footnotes": null, "date": "1916\u2013"}], "find_spot": null, "related_works": [], "former_accession_numbers": [], "did_you_know": null, "description": "This round inro is decorated with an image of a single mouse feasting on beans. The theme is elaborated with a metal <em>ojime</em> (cinch) in the form of a cloth bag tied with rope\u2014suggesting the food stores the mouse is raiding. The carved wood netsuke, or toggle, is in the shape of a mouse clutching a nut.", "external_resources": {"wikidata": ["https://www.wikidata.org/wiki/Q79481403"], "internet_archive": ["https://archive.org/details/clevelandart-1916.885-inro", "https://archive.org/details/clevelandart-1916.885-inro-case-with-mice"]}, "citations": [], "url": "https://clevelandart.org/art/1916.885", "images": {"annotation": null, "web": {"url": "https://openaccess-cdn.clevelandart.org/1916.885/1916.885_web.jpg", "width": "690", "height": "900", "filesize": "76798", "filename": "1916.885_web.jpg"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/1916.885/1916.885_print.jpg", "width": "2606", "height": "3400", "filesize": "972457", "filename": "1916.885_print.jpg"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/1916.885/1916.885_full.tif", "width": "6000", "height": "7828", "filesize": "140931408", "filename": "1916.885_full.tif"}}, "alternate_images": [{"date_created": "2018-08-28T09:47:29", "annotation": "", "web": {"url": "https://openaccess-cdn.clevelandart.org/alternate/1916.885/1916.885_alt0_web.jpg", "width": "696", "height": "900", "filesize": "77705"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/alternate/1916.885/1916.885_alt0_print.jpg", "width": "2628", "height": "3400", "filesize": "988020"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/alternate/1916.885/1916.885_alt0_full.tif", "width": "6000", "height": "7763", "filesize": "139761360"}}], "creditline": "Gift of D. Z. Norton", "sketchfab_id": null, "sketchfab_url": null, "gallery_donor_text": null, "athena_id": 97254, "creators": [], "legal_status": "accessioned", "accession_date": "1916-05-26T00:00:00", "sortable_date": 1870, "date_text": "late 1800s", "collapse_artists": false, "on_loan": false, "recently_acquired": false, "record_type": "object", "conservation_statement": null, "is_nazi_era_provenance": false, "impression": null, "alternate_titles": ["Inro"], "is_highlight": false, "updated_at": "2024-03-26 01:56:20.265000"}]}
		
		let r = t.process(data)
		
		//console.log(r)
		
		expect(r.numPages).toBe(1)
		expect(r.numRecords).toBe(1)
		
		expect(r.sr[0].title).toBe('Inro (Case) with Mice and Beans')
		expect(r.sr[0].imageData).toBe('https://openaccess-cdn.clevelandart.org/1916.885/1916.885_web.jpg')
		
		expect(r.sr[0].text).toBe('Inro (Case) with Mice and Beans, late 1800s. Japan, Meiji period (1868–1912). Lacquer on wood with color and sprinkled gold powder design (maki-e); diameter: 8.4 cm (3 5/16 in.). The Cleveland Museum of Art, Gift of D. Z. Norton 1916.885')
		
		expect(r.sr[0].musId).toBe(97254)
		
	})


	test("getting multible works with paging",()=> {
		
		let t = new Cleveland ()
		//results of https://openaccess-api.clevelandart.org/api/artworks?q="Cat"&limit=4&skip=22&has_image=1
		
		let data = {"info": {"total": 78, "parameters": {"skip": 22, "limit": 4, "q": "\"Cat\"", "has_image": "1", "select": "accession_number,accession_number_sortable,cover_accession_number,department,gallery,collection,department,classification_type", "search": "\"Cat\""}}, "data": [{"id": 159168, "accession_number": "1995.356", "share_license_status": "CC0", "tombstone": "Animal-and-Grape Mirror, mid 600s. China, Tang dynasty (618-907). Bronze; diameter: 8.2 cm (3 1/4 in.); overall: 1 cm (3/8 in.); rim: 1 cm (3/8 in.). The Cleveland Museum of Art, Gift of Drs. Thomas and Martha Carter in Honor of Sherman E. Lee 1995.356", "current_location": null, "title": "Animal-and-Grape Mirror", "title_in_original_language": "\u745e\u7378\u8461\u8404\u93e1", "creation_date": "mid 600s", "creation_date_earliest": 625, "creation_date_latest": 675, "artists_tags": [], "culture": ["China, Tang dynasty (618-907)"], "technique": "bronze", "support_materials": [], "department": "Chinese Art", "collection": "China - Tang Dynasty", "type": "Metalwork", "measurements": "Diameter: 8.2 cm (3 1/4 in.); Overall: 1 cm (3/8 in.); Rim: 1 cm (3/8 in.)", "dimensions": {"diameter": {"width": 0.082}, "overall": {"height": 0.01}, "rim": {"height": 0.01}}, "state_of_the_work": null, "edition_of_the_work": null, "copyright": null, "inscriptions": [], "exhibitions": {"current": [{"id": 193152, "title": "Circles of Reflection:  The Carter Collection of Chinese Bronze Mirrors", "description": "<i>Circles of Reflection:  The Carter Collection of Chinese Bronze Mirrors</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 17-November 26, 2000); China Institute Gallery, New York, NY (February 6-June 2, 2002); Elvehjem Museum of Art, Madison, WI (December 20, 2003-February 29, 2004).", "opening_date": "2000-09-17T00:00:00"}], "legacy": [{"description": "Cleveland, Ohio:  The Cleveland Museum of Art; September 17-November 26, 2000.  \"Circles of Reflection:  The Carter Collection of Chinese Bronze Mirrors\" exh. cat. no. 53, p. 64; pp. 108, 122; repr. p. 64.", "opening_date": "2000-09-17T00:00:00"}, {"description": "New York, New York:  China Institute Gallery; February 6, 2002-June 2, 2002.  \"Circles of Reflection: The Carter Collection of Chinese Bronze Mirrors\".", "opening_date": "2002-02-06T00:00:00"}, {"description": "Madison, Wisconsin: Elvehjem Museum of Art, University of Wisconsin-Madison; December 20, 2003-February 29, 2004.  \"Circles of Reflection: The Carter Collection of Chinese Bronze Mirrors\".", "opening_date": "2003-12-20T00:00:00"}]}, "provenance": [{"description": "Thomas and Martha Carter, Madison, WI", "citations": [], "footnotes": null, "date": null}], "find_spot": null, "related_works": [], "former_accession_numbers": [], "did_you_know": null, "description": "Animal-and-Grape Mirror, mid-7th century ad China, Tang dynasty (ad 618-907) CMA 1995.356 [Cat. no. 53]", "external_resources": {"wikidata": ["https://www.wikidata.org/wiki/Q79978365"], "internet_archive": ["https://archive.org/details/clevelandart-1995.356-animal-and-grape-mir"]}, "citations": [{"citation": "Chou, Ju-hsi. <em>Circles of reflection: the Carter collection of Chinese bronze mirrors</em>. Cleveland, Ohio: Cleveland Museum of Art, 2000.", "page_number": "Reproduced: p. 19, cat. no. 53", "url": null}, {"citation": "Yen, Chuan-Ying. \"The Decorative Motifs on Tang Dynasty Mirrors.\" <em>Cleveland Studies in the History of Art </em>9 (2005): 1-23.", "page_number": "Mentioned and reproduced: P. 6, fig. 12", "url": "https://www.jstor.org/stable/20079750"}], "url": "https://clevelandart.org/art/1995.356", "images": {"annotation": null, "web": {"url": "https://openaccess-cdn.clevelandart.org/1995.356/1995.356_web.jpg", "width": "998", "height": "893", "filesize": "592783", "filename": "1995.356_web.jpg"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/1995.356/1995.356_print.jpg", "width": "1536", "height": "1375", "filesize": "1441886", "filename": "1995.356_print.jpg"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/1995.356/1995.356_full.tif", "width": "1536", "height": "1375", "filesize": "6338380", "filename": "1995.356_full.tif"}}, "alternate_images": [], "creditline": "Gift of Drs. Thomas and Martha Carter in Honor of Sherman E. Lee", "sketchfab_id": null, "sketchfab_url": null, "gallery_donor_text": null, "athena_id": 159168, "creators": [], "legal_status": "accessioned", "accession_date": "1996-06-03T00:00:00", "sortable_date": 625, "date_text": "mid 600s", "collapse_artists": false, "on_loan": false, "recently_acquired": false, "record_type": "object", "conservation_statement": null, "is_nazi_era_provenance": false, "impression": null, "alternate_titles": [], "is_highlight": false, "updated_at": "2024-03-26 02:00:28.982000"}, {"id": 147850, "accession_number": "1974.21.a", "share_license_status": "CC0", "tombstone": "View from My Window in Rome (recto), c. 1819. Carl Ludwig Tischbein (German, 1797\u20131855). Graphite and pen and gray ink, framing lines in pen and black ink and graphite; sheet: 22.4 x 17.1 cm (8 13/16 x 6 3/4 in.); image: 20.5 x 16.8 cm (8 1/16 x 6 5/8 in.). The Cleveland Museum of Art, Lawrence Hitchcock Fund 1974.21.a", "current_location": null, "title": "View from My Window in Rome (recto)", "creation_date": "c. 1819", "creation_date_earliest": 1814, "creation_date_latest": 1824, "artists_tags": ["male"], "culture": ["Germany, 19th century"], "technique": "graphite and pen and gray ink, framing lines in pen and black ink and graphite", "support_materials": [{"description": "beige(1) wove paper", "watermarks": []}], "department": "Drawings", "collection": "DR - German", "type": "Drawing", "measurements": "Sheet: 22.4 x 17.1 cm (8 13/16 x 6 3/4 in.); Image: 20.5 x 16.8 cm (8 1/16 x 6 5/8 in.)", "dimensions": {"sheet": {"height": 0.224, "width": 0.171}, "image": {"height": 0.205, "width": 0.168}}, "state_of_the_work": null, "edition_of_the_work": null, "copyright": null, "inscriptions": [{"inscription": "inscribed by artist, upper right, in graphite: Aus meinem Fenster in Rom.; center left, in graphite: H. Peter; inscribed on former mount (now removed), in black ink: Karl Ludwig Tischbein / 1797-1855 / [g]arantiert f\u00fcr Echtheit", "inscription_translation": null, "inscription_remark": null}], "exhibitions": {"current": [{"id": 178036, "title": "Nature Sublime: Landscapes from the 19th Century", "description": "<i>Nature Sublime: Landscapes from the 19th Century</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (August 15-November 14, 2004).", "opening_date": "2004-08-15T00:00:00"}, {"id": 383281, "title": "Stories From Storage", "description": "<i>Stories From Storage</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 7-May 16, 2021).", "opening_date": "2021-02-07T05:00:00"}], "legacy": []}, "provenance": [{"description": "Shepherd Gallery, New York, NY, sold to the Cleveland Museum of Art, Cleveland, OH)", "citations": [], "footnotes": null, "date": "?-1974"}], "find_spot": null, "related_works": [], "former_accession_numbers": [], "did_you_know": "Carl Ludwig Tischbein came from a family that produced 28 artists and artisans active in Germany and throughout Europe.", "description": "Carl Ludwig Tischbein was one of many artists who traveled from across Europe to Rome during the early 19th century and drew upon the city\u2019s ancient past and its surrounding landscape for inspiration. This spare drawing uses Tischbein's window as a compositional device, framing a casual view of rooftops and walled gardens populated by a variety of plants and a small cat.", "external_resources": {"wikidata": ["https://www.wikidata.org/wiki/Q79927444"], "internet_archive": ["https://archive.org/details/clevelandart-1974.21.a-view-from-my-window"]}, "citations": [{"citation": "Lee, Sherman E. \u201cThe Year in Review for 1974.\u201d <em>The Bulletin of the Cleveland Museum of Art</em> 62, no. 3 (March 1975): 62\u2013102.", "page_number": "Reproduced: p. 79; Mentioned: p. 101, no. 111", "url": "http://www.jstor.org/stable/25152580"}], "url": "https://clevelandart.org/art/1974.21.a", "images": {"annotation": null, "web": {"url": "https://openaccess-cdn.clevelandart.org/1974.21.a/1974.21.a_web.jpg", "width": "704", "height": "900", "filesize": "174376", "filename": "1974.21.a_web.jpg"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/1974.21.a/1974.21.a_print.jpg", "width": "2658", "height": "3400", "filesize": "2290099", "filename": "1974.21.a_print.jpg"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/1974.21.a/1974.21.a_full.tif", "width": "5510", "height": "7047", "filesize": "116515112", "filename": "1974.21.a_full.tif"}}, "alternate_images": [], "creditline": "Lawrence Hitchcock Fund", "sketchfab_id": null, "sketchfab_url": null, "gallery_donor_text": null, "athena_id": 147850, "creators": [{"id": 12780, "description": "Carl Ludwig Tischbein (German, 1797\u20131855)", "extent": null, "qualifier": null, "role": "artist", "biography": null, "name_in_original_language": null, "birth_year": "1797", "death_year": "1855"}], "legal_status": "accessioned", "accession_date": "1974-03-08T00:00:00", "sortable_date": 1814, "date_text": "c. 1819", "collapse_artists": false, "on_loan": false, "recently_acquired": false, "record_type": "part", "conservation_statement": null, "is_nazi_era_provenance": false, "impression": null, "alternate_titles": ["View from the Artist's Window in Rome (recto)"], "is_highlight": false, "updated_at": "2024-03-26 01:59:35.985000"}, {"id": 147849, "accession_number": "1974.21", "share_license_status": "CC0", "tombstone": "View from My Window in Rome (recto) Soldier in a Landscape (verso) , c. 1817. Carl Ludwig Tischbein (German, 1797\u20131855). Graphite and pen and gray ink, framing lines in pen and black ink and graphite; sheet: 22.4 x 17.1 cm (8 13/16 x 6 3/4 in.); image: 20.5 x 16.8 cm (8 1/16 x 6 5/8 in.). The Cleveland Museum of Art, Lawrence Hitchcock Fund 1974.21", "current_location": null, "title": "View from My Window in Rome (recto) Soldier in a Landscape (verso) ", "creation_date": "c. 1817", "creation_date_earliest": 1802, "creation_date_latest": 1822, "artists_tags": ["male"], "culture": ["Germany, 19th century"], "technique": "graphite and pen and gray ink, framing lines in pen and black ink and graphite", "support_materials": [], "department": "Drawings", "collection": "DR - German", "type": "Drawing", "measurements": "Sheet: 22.4 x 17.1 cm (8 13/16 x 6 3/4 in.); Image: 20.5 x 16.8 cm (8 1/16 x 6 5/8 in.)", "dimensions": {"sheet": {"height": 0.224, "width": 0.171}, "image": {"height": 0.205, "width": 0.168}}, "state_of_the_work": null, "edition_of_the_work": null, "copyright": null, "inscriptions": [{"inscription": "by artist, upper right, in graphite: Aus meinem Fenster in Rom. ; by artist, center left, in graphite: H. Peter ; FRAGMENT OF OLD MOUNT(?) (now removed): in black ink: Karl Ludwig Tischbein / 1797-1855 / [g]arantiert f\u00fcr Echtheit", "inscription_translation": null, "inscription_remark": null}], "exhibitions": {"current": [{"id": 304508, "title": "German Drawings of the 18th, 19th, and 20th Centuries", "description": "<i>German Drawings of the 18th, 19th, and 20th Centuries</i>. The Cleveland Museum of Art (April 1-July 13, 1980).", "opening_date": "1980-04-01T05:00:00"}, {"id": 383281, "title": "Stories From Storage", "description": "<i>Stories From Storage</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 7-May 16, 2021).", "opening_date": "2021-02-07T05:00:00"}], "legacy": []}, "provenance": [{"description": "[Shepherd Gallery Associates]", "citations": [], "footnotes": null, "date": null}], "find_spot": null, "related_works": [], "former_accession_numbers": [], "did_you_know": "Carl Ludwig Tischbein came from a family that produced 28 artists and artisans active in Germany and throughout Europe.", "description": "Carl Ludwig Tischbein was one of many artists who traveled from across Europe to Rome during the early 19th century and drew upon the city\u2019s ancient past and its surrounding landscape for inspiration. This spare drawing uses Tischbein's window as a compositional device, framing a casual view of rooftops and walled gardens populated by a variety of plants and a small cat.<a href=\"https://www.clevelandart.org/art/1974.21.a#\"><br></a>", "external_resources": {"wikidata": ["https://www.wikidata.org/wiki/Q79927441"], "internet_archive": ["https://archive.org/details/clevelandart-1974.21-view-from-my-window"]}, "citations": [{"citation": "Lee, Sherman E. \u201cThe Year in Review for 1974.\u201d <em>The Bulletin of the Cleveland Museum of Art</em> 62, no. 3 (March 1975): 62\u2013102.", "page_number": "Reproduced: p. 79; Mentioned: p. 101, no. 111", "url": "http://www.jstor.org/stable/25152580"}], "url": "https://clevelandart.org/art/1974.21", "images": {"annotation": null, "web": {"url": "https://openaccess-cdn.clevelandart.org/1974.21/1974.21_web.jpg", "width": "900", "height": "501", "filesize": "170236", "filename": "1974.21_web.jpg"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/1974.21/1974.21_print.jpg", "width": "3400", "height": "1892", "filesize": "1366953", "filename": "1974.21_print.jpg"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/1974.21/1974.21_full.tif", "width": "12662", "height": "7047", "filesize": "267714336", "filename": "1974.21_full.tif"}}, "alternate_images": [{"date_created": "2015-02-05T09:25:57", "annotation": "", "web": {"url": "https://openaccess-cdn.clevelandart.org/alternate/1974.21/1974.21_alt0_web.jpg", "width": "704", "height": "900", "filesize": "174358"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/alternate/1974.21/1974.21_alt0_print.jpg", "width": "2658", "height": "3400", "filesize": "2290081"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/alternate/1974.21/1974.21_alt0_full.tif", "width": "5510", "height": "7047", "filesize": "116515104"}}], "creditline": "Lawrence Hitchcock Fund", "sketchfab_id": null, "sketchfab_url": null, "gallery_donor_text": null, "athena_id": 147849, "creators": [{"id": 12780, "description": "Carl Ludwig Tischbein (German, 1797\u20131855)", "extent": null, "qualifier": null, "role": "artist", "biography": null, "name_in_original_language": null, "birth_year": "1797", "death_year": "1855"}], "legal_status": "accessioned", "accession_date": "1974-03-08T00:00:00", "sortable_date": 1802, "date_text": "c. 1817", "collapse_artists": false, "on_loan": false, "recently_acquired": false, "record_type": "cover", "conservation_statement": null, "is_nazi_era_provenance": false, "impression": null, "alternate_titles": ["View from the Artist's Window in Rome (recto)"], "is_highlight": false, "updated_at": "2024-03-26 01:59:35.980000"}, {"id": 79381, "accession_number": "2016.247", "share_license_status": "CC0", "tombstone": "L\u2019Illustration: On Cats by Jacques Dalbray, 1901. Th\u00e9ophile Alexandre Steinlen (Swiss, 1859\u20131923). Color lithograph illustration with letterpress; overall: 39.5 x 58.2 cm (15 9/16 x 22 15/16 in.). The Cleveland Museum of Art, Bequest of Elizabeth Carroll Shearer 2016.247", "current_location": null, "title": "On Cats by Jacques Dalbray", "series": "L\u2019Illustration", "creation_date": "1901", "creation_date_earliest": 1901, "creation_date_latest": 1901, "artists_tags": ["male"], "culture": ["Switzerland"], "technique": "Color lithograph illustration with letterpress", "support_materials": [], "department": "Prints", "collection": "Prints", "type": "Print", "measurements": "Overall: 39.5 x 58.2 cm (15 9/16 x 22 15/16 in.)", "dimensions": {"overall": {"height": 0.395, "width": 0.582}}, "state_of_the_work": null, "edition_of_the_work": null, "copyright": null, "inscriptions": [], "exhibitions": {"current": [], "legacy": []}, "provenance": [], "find_spot": null, "related_works": [], "former_accession_numbers": [], "did_you_know": null, "description": "On this page from the March 30, 1901, issue of <em>L\u2019Illustration</em> (Illustration), a French magazine, colorful depictions of cats surround a short text praising those animals and their place in history. The cats sit, sleep, and prowl around the columns of text, as if they are furnishings to climb and sleep on. Color illustrations were particularly difficult and expensive to reproduce before the advent of modern printing technology because each color had to be printed independently. As a result, artists like Th\u00e9ophile Alexandre Steinlen developed strategies to achieve the maximum effect by overlapping as <br>few colors as possible, such as the yellow, gray, and black that create a variety of fur patterns here.", "external_resources": {"wikidata": ["https://www.wikidata.org/wiki/Q79471683"], "internet_archive": ["https://archive.org/details/clevelandart-2016.247-illustration-on-cats", "https://archive.org/details/clevelandart-2016.247-on-cats-by-jacques-d"]}, "citations": [], "catalogue_raisonne": "Crauzat", "url": "https://clevelandart.org/art/2016.247", "images": {"annotation": null, "web": {"url": "https://openaccess-cdn.clevelandart.org/2016.247/2016.247_web.jpg", "width": "900", "height": "610", "filesize": "231320", "filename": "2016.247_web.jpg"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/2016.247/2016.247_print.jpg", "width": "3400", "height": "2305", "filesize": "2426879", "filename": "2016.247_print.jpg"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/2016.247/2016.247_full.tif", "width": "6305", "height": "4274", "filesize": "80874924", "filename": "2016.247_full.tif"}}, "alternate_images": [{"date_created": "2018-05-09T11:02:27", "annotation": "", "web": {"url": "https://openaccess-cdn.clevelandart.org/alternate/2016.247/2016.247_alt0_web.jpg", "width": "900", "height": "617", "filesize": "212944"}, "print": {"url": "https://openaccess-cdn.clevelandart.org/alternate/2016.247/2016.247_alt0_print.jpg", "width": "3400", "height": "2329", "filesize": "2142468"}, "full": {"url": "https://openaccess-cdn.clevelandart.org/alternate/2016.247/2016.247_alt0_full.tif", "width": "6278", "height": "4301", "filesize": "81037080"}}], "creditline": "Bequest of Elizabeth Carroll Shearer", "sketchfab_id": null, "sketchfab_url": null, "gallery_donor_text": null, "athena_id": 79381, "creators": [{"id": 14017, "description": "Th\u00e9ophile Alexandre Steinlen (Swiss, 1859\u20131923)", "extent": null, "qualifier": null, "role": "artist", "biography": null, "name_in_original_language": null, "birth_year": "1859", "death_year": "1923"}], "legal_status": "accessioned", "accession_date": "2016-09-06T00:00:00-04:00", "sortable_date": 1901, "date_text": "1901", "collapse_artists": false, "on_loan": false, "recently_acquired": false, "record_type": "object", "conservation_statement": null, "is_nazi_era_provenance": false, "impression": null, "alternate_titles": [], "is_highlight": false, "updated_at": "2024-04-16 11:02:57.307000"}]} 
		
		
		let r = t.process(data)
		
		//console.log(r)
		
		expect(r.sr.length).toBe(4)
		expect(r.numPages).toBe(7)
		
	})


})