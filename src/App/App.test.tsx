import React 						from 'react';
import { render, screen } 			from '@testing-library/react';
import App 							from './index';

describe('[ APP COMPONENT ]', () => {
	const renderComponent = () => render( <App /> );
	describe('[ EXISTING ]', () => {
		it('renders project title h1', () => {
			renderComponent();
			const projectTitleH1 = screen.getByText(/RobotFactory/i);
			expect( projectTitleH1 ).toBeInTheDocument();
		});
		it('renders parent with "main" as role for children components', () => {
			renderComponent();
			const parentComponentDiv = screen.getByRole('main');
			expect( parentComponentDiv ).toBeInTheDocument();
		});
	})
	describe('[ STRUCTURE W/ CHILDREN ]', () => {
		it('has 2 robots initiated', () => {
			renderComponent();
			const robotsElements 	= screen.getAllByTestId('robot');
			expect( robotsElements ).toHaveLength( 2 );
		});
		it('has 2 buttons [ start, stop ]', () => {
			renderComponent();
			const buttons = screen.getAllByRole('button');
			expect( buttons ).toHaveLength( 2 );
			buttons.forEach( button => {
				expect( button ).toHaveAccessibleDescription();
			});
		})
	})
})
