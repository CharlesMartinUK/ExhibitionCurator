import parse from 'html-react-parser';

const Work=({title,description,origin,creationDate,location,image})=> {
	//console.log(description)
	return (
		<div>
			<p>Title: {title}</p>
			<p>Description: {parse(description)}</p>
									            
			<p>Origin: {origin}         
			Creation Date:{creationDate} Location:{location}
			</p>
			
			<img src={image} alt="More Detailed display of work" className="responsiveImage"/>
		
		</div>
	)
	
}

export default Work