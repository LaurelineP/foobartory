import { useRef } 				from 'react';
import { IRobotMiner } 			from '../../types/helpers.types';
import 							'./styles.scss';

export default function Robot({
	id,
	name,
	currAction,
	moves,
	count,
}: IRobotMiner ) {
	const robotContainerRef = useRef();
	const hasMoves = ( moves && Object.keys( moves )) || false;
	const style = hasMoves ? {
		transform	: `translateX(${ moves.x }px) translateY(${ moves.y }px) scale(.7)`,
		transition	: 'transform 5s'
	} : null;

	return (
		<div
			ref 		= { robotContainerRef }
			id			= { `${id }`}
			data-name	= { name }
			title		= { name }
			className	= "robot-foo-bar-container"
			{...( hasMoves && { style })}
		>
			<p data-testid = "timer" >seconds { count }</p>

			{/* ROBOT */}
			<div id={`robot-${ id }`} className={`robot-foo-bar ${ currAction }`} data-testid = "robot">
				<div className = "left arm" />

				{/* ROBOT' BODY & FACE */}
				<div className = "body">
					<div className ="face" />
				</div>

				<div className ="right arm" />
			</div>
			{/* SHADOW */}
			<div className ="shadow" />
		</div>
	);
}
