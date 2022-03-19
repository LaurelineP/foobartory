import React 						from 'react';
import { render, screen } 			from '@testing-library/react';
import ControllerPanel				from './index';
import Button						from '../../shared/Button';


const mockChildComponent = jest.fn();
jest.mock('../../shared/Button', () => (props, children) => {
	mockChildComponent( props, children );
	console.log('💥')
	return(
		//@ts-expect-error
		<mockChildComponent { ...props } { ...children }/>
	)
});
  

describe('[ CONTROLPANEL COMPONENT ]', () => {
	// const buttons = [{ 'data-action': 'button1', onClick : () => jest.fn(), title: 'button1'}]
	const mockProps = (_, idx) => ({ 'data-action': 'action', onClick:() => jest.fn(), title: `button${idx}`, children : {}  });
	const buttons = Array.from({ length: 2 }, mockProps );
	const renderComponent = () => render(<ControllerPanel>{ buttons.map( button => mockChildComponent( button )) }</ControllerPanel>);

	describe('[ EXISTING ]', () => {
		it('renders parent component "control-panel-container"', () => {
			renderComponent()
			const parentContainer = screen.getByTestId('control-panel-container');
			
			expect( parentContainer ).toBeInTheDocument();
		});
		it('renders "buttons-container"', () => {
			renderComponent();
			const buttonsContainer = screen.getByTestId('buttons-container');
			expect( buttonsContainer ).toBeInTheDocument();
		});
	});
});
