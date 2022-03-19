import { useState } 			from 'react';
import ControlPanel 			from '../components/ControlPanel';
import Robots 					from '../components/Robots';
import Button 					from '../shared/Button';
import { TRobotAction } 		from '../types/helpers.types';
import { controlButtons } 		from '../data';
import 							'./App.scss';

export default function App() {
	const [ action, setAction] = useState< TRobotAction >( 'standby' );
	const handleClick = e => {
		setAction( e.target.dataset.action );
	};

	return (
		<div id = "App">
			<h1>RobotFactory</h1>
			<div id = "robot-factory" role = "main">
				<Robots {...{ action }} />
				<ControlPanel>
					{
						controlButtons.map(({ actionLabel, description }, idx ) => (
							<div className = "button-container" key = { idx }>
								<Button
									data-action = { actionLabel }
									onClick		= { handleClick }
									title		= { description }
									>
									{ actionLabel }
								</Button>
							</div>
						))
					}
				</ControlPanel>
			</div>
		</div>
	)
}