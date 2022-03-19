import React 				from 'react';
import { render, screen } 	from '@testing-library/react';
import userEvent			from '@testing-library/user-event';
import Button 				from './index';

describe('[ BUTTON COMPONENT ]', () => {
	const renderComponent = () => render(<Button data-action = "start" onClick = { jest.fn() } title = "button description">start</Button>);
	describe('[ EXISTING ]', () => {
		it('renders 1 button', () => {
			renderComponent();
			const buttonElement = screen.getByRole('button');
			expect( buttonElement ).toBeInTheDocument();
		});
	})
})