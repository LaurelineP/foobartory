import { useState } 				from 'react';
import Robot 						from '../Robot';
import { robotTools } 				from '../../helpers';
import { IRobotMiner } 				from '../../types/helpers.types';

export default function Robots({ action }) {
	const [ robots, setRobots ] = useState<IRobotMiner[]>(
		robotTools.createRobots( 2 )
	);

	return (
		<div id="robot-room-production">
			{
				robots.map(({ id, name, moves, count, currAction }, idx) => (
					<Robot
						key			= { idx }
						currAction	= { action }
						{...{ id }}
						{...{ name }}
						{...{ count }} // tmp
						{...{ moves }}
					/>
				))
			}
		</div>
	);
}
