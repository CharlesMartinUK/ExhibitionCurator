import parse from 'html-react-parser';

const Work=({title,description,origin,creationDate,location,image})=> {
	//console.log(title," D:",description," O:",origin)
	// not sure why this this happens but sometimes lods of undefined get passed in
	// which causes parse to choke so guard that
	
	let safeD = ""
	if((description != undefined ) && (description != null)) safeD = description 
	
	return (
		<div>
			<h2>Title: {title}</h2>
			
			<p>Description: {parse(safeD)}</p>						            
			<p>Origin: {origin}         
			Creation Date:{creationDate} Location:{location}
			</p>
			
			<img src={image} alt="More Detailed display of work" className="responsiveImage"/>
		
		</div>
	)
	
}

export default Work