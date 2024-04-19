import { render, screen } from '@testing-library/react';
import { fireEvent } from "@testing-library/react";

//import App from '../App';
import Pagination from './Pagination.jsx'

describe("Checking Pagination", () => {
	
	test('Basic Display', () => {
		
		render(<Pagination page={1} numPages={5} />);
		const back = screen.getByText(/Back/i);
		expect(back).toBeInTheDocument();
		
		const next = screen.getByText(/Next/i);
		expect(next).toBeInTheDocument();
		
		const pageNum = screen.getByText(/Page 1 of 5/)
		expect(pageNum).toBeInTheDocument()
		
	})

	test('button disable(page 1 of 5)', () => {
		
		render(<Pagination page={1} numPages={5} />);
		const back = screen.getByText(/Back/i);
		expect(back).toBeDisabled()
		
		const next = screen.getByText(/Next/i);
		expect(next).not.toBeDisabled();
			
	})

	test('button disable(page 2 of 5)', () => {
		
		render(<Pagination page={2} numPages={5} />);
		const back = screen.getByText(/Back/i);
		expect(back).not.toBeDisabled()
		
		const next = screen.getByText(/Next/i);
		expect(next).not.toBeDisabled();
			
	})

	test('button disable(page 5 of 5)', () => {
		
		render(<Pagination page={5} numPages={5} />);
		const back = screen.getByText(/Back/i);
		expect(back).not.toBeDisabled()
		
		const next = screen.getByText(/Next/i);
		expect(next).toBeDisabled();
			
	})

	test("button click ",() => {
		
		const backClick = jest.fn()
		const forwardClick = jest.fn()
		
		render(<Pagination page={2} numPages={5} backClick={backClick} forwardClick={forwardClick} />);
		
		
		const backElement = screen.getByText(/Back/i);
		fireEvent.click(backElement)
		expect(backClick).toBeCalled()
		
		
		const nextElement = screen.getByText(/Next/i);
		fireEvent.click(nextElement)
		expect(forwardClick).toBeCalled()
	})

})
