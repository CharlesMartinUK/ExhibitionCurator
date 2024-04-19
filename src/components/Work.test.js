import { render, screen } from '@testing-library/react';
import Work from './Work.jsx'

describe("Search controls",() => {  

	test("details displayed",() => {
		
		render(<Work title="MyTitle" description="MyDescription" origin="MyOrigin" creationDate="MyCreationDate" image="MyImageURL" />)
		
		
		expect( screen.getByText("MyTitle",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByText("MyDescription",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByText("MyOrigin",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByText("MyCreationDate",{exact: false}) ).toBeInTheDocument();
		
		expect( screen.getByRole("img") ).toHaveAttribute('src', 'MyImageURL');
		
	})


} )