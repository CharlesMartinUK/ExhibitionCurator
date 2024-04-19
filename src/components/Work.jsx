const Work=({title,description,origin,creationDate,location,image})=> {
	
	return (
		<div>
			<p>Title: {title}</p>
			<p>Description: {description}</p>
									            
			<p>Origin: {origin}         
			Creation Date:{creationDate} Location:{location}
			</p>
			
			<img src={image} alt="More Detailed display of work"/>
		
		</div>
	)
	
}

export default Work