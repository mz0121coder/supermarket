import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

// Mock the Link component from react-router-dom
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	Link: jest
		.fn()
		.mockImplementation(({ to, children }) => <a href={to}>{children}</a>),
}));

describe('Home component', () => {
	test('renders the Home component correctly', () => {
		render(
			<Router>
				<Home />
			</Router>
		);

		// Check if the heading, paragraph, and homeImage are rendered correctly
		const heading = screen.getByRole('heading', { level: 1 });
		const paragraph = screen.getByText(/Order your groceries/i);
		const homeImage = screen.getByAltText('');

		expect(heading).toBeInTheDocument();
		expect(paragraph).toBeInTheDocument();
		expect(homeImage).toBeInTheDocument();
	});
});
