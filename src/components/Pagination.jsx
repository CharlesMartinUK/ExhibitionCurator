const Pagination =({page, numPages, backClick, forwardClick}) => {

	let backDisabled = page > 1 ? false : true
	let forwardDisabled = page < numPages ? false : true

	return (
		<div>
			<p>Page {page} of {numPages}</p>
			<button type="button" disabled={backDisabled} onClick={backClick}> Back</button>  
			<button type="button" disabled={forwardDisabled}  onClick={ forwardClick }>Next</button>
		</div>
	)

}
	
export default Pagination