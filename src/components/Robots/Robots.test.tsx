import React 						from 'react';
import { render, screen } 			from '@testing-library/react';
import Robots						from './index';

describe('[ ROBOT COMPONENT ]', () => {
	const renderComponent = () => render(<Robots action = "start"/>);
	describe('EXISTING', () => {
		it('renders robots elements', () => {
			renderComponent();
			const robotsContainers = screen.getAllByTestId( 'robot' );
			robotsContainers.map( robot => {
				expect( robot ).toBeInTheDocument();
			})
			expect( robotsContainers ).toHaveLength( 2 );
		});
		
	})
})