import { render, screen } from '@testing-library/react';
import App from "../App.js"


describe("Layout",() => { 

	test("Basic controls displayed",() => {
		
		render(<App />);
		
		const linkElement = screen.getByText(/Exhibition Curator/i);
		expect(linkElement).toBeInTheDocument();
		
	})

} )