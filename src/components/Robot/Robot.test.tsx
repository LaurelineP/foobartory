import React 						from 'react';
import { render, screen } 			from '@testing-library/react';
import Robot						from './index';


const renderComponent = () => render(<Robot id = {1} name = "start" currAction = { null } moves = {{ x: 0, y: 0 }} count = { 0 }/>);

describe('[ ROBOT COMPONENT ]', () => {
	describe('EXISTING', () => {
		it('renders robot element', () => {
			renderComponent();
			const robotElement = screen.getByTestId('robot');
			expect( robotElement ).toBeInTheDocument();
		});
		it('renders robot with appropriate init style', () => {
			renderComponent();
			const robotElement = screen.getByTestId('robot');
		});
		it('renders a timer element for each robot', () => {
			renderComponent();
			const timerElement = screen.getByTestId('timer');
			expect( timerElement ).toBeInTheDocument();
		});
	})
})