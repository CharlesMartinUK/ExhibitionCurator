import { render, screen } from '@testing-library/react';

import NoPage from './NoPage.jsx'

describe("No page 404",() => {

	test("message displayed",() => {
	
		render(<NoPage />);
	
		const errorElement = screen.getByText("Error 404",{exact:false});
		expect(errorElement).toBeInTheDocument();
	})


})