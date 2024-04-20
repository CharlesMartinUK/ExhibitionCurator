import parse from 'html-react-parser';

const Work=({title,description,origin,creationDate,location,image})=> {
	//console.log(title," D:",description," O:",origin)
	let safeD = (description === undefined ?  "" : description) // not sure why this is needed, sometimes get passed undefined
	
	return (
		<div>
			<p>Title: {title}</p>
			
			<p>Description: {parse(safeD)}</p>						            
			<p>Origin: {origin}         
			Creation Date:{creationDate} Location:{location}
			</p>
			
			<img src={image} alt="More Detailed display of work" className="responsiveImage"/>
		
		</div>
	)
	
}

export default Work