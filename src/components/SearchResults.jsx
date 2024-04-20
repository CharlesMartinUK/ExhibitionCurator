import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchResults({works,src}) {
		//console.log(works)
		//tryed to use react cards here but scrolled over top of stick / navbar for soem reason
	return (
		<>
			{
				works.map( (item) => {
					let ts = "view?id="+ item.musId  +'&vsrc=' + src 
						return 	<Col xs className="artCard" > 
									<a href={ts} key={item.id} >
										<h3>{item.title}</h3> 
										<p>{item.text}</p> 
										<img src={item.imageData} alt="Thumbnail of work" className="thumbnailImage"/>
									</a>
									</Col>
								
					})
			}
		</>
	)
			
}
	

export 	default SearchResults