function SearchResults({works,src}) {
		//console.log(works)
	return (
		<div>
			{
				works.map( (item) => {
					let ts = "view?id="+ item.musId  +'&vsrc=' + src 
						return 	<a href={ts} key={item.id} >
									<div > 
										<h3>{item.title}</h3> 
										<p>{item.text}</p> 
										<img src={item.imageData} alt="Thumbnail of work" />
									</div>
								</a>
					})
			}
		</div>
	)
			
}
	

export 	default SearchResults