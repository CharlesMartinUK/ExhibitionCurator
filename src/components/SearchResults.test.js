import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults.jsx'

describe("Search Results",() => {  

	test("details displayed",() => {
		
		let data = [{musId:99, title:"TheTitle",text:"TheText",imageData:"TheImageData",id:0 }]
		
		render(<SearchResults works={data}  />)
		
		
		expect( screen.getByText("TheTitle",{exact: false}) ).toBeInTheDocument();
		expect( screen.getByText("TheText",{exact: false}) ).toBeInTheDocument();
		expect( screen.getByRole("img") ).toHaveAttribute('src', 'TheImageData');
		/*
		expect( screen.getByText("MyTitle",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByText("MyDescription",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByText("MyOrigin",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByText("MyCreationDate",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByRole("img") ).toHaveAttribute('src', 'MyImageURL');
		*/
	})


} )