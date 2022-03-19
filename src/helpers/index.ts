import * as HELPERS from '../types/helpers.types'


/** Creates robots array */
export function createRobots( initNumber: number = 0 ): HELPERS.IRobotMiner[] {
	if( !initNumber || ( typeof initNumber !== "number" && isNaN( initNumber )) ) return [];
	const robots = Array.from({ length: initNumber }, createRobot );
	return robots;
}

/** Creates robot object */
export function createRobot(_, idx: number ): HELPERS.IRobotMiner {
	if( !arguments.length ) throw Error(`callback arguments missing - item: ${ _ }, idx: ${ idx }`);
	if( arguments.length === 2 ){
		return {
			id			: idx + 1,
			name		: `robot-${idx + 1}`,
			currAction	: null,
			nextAction	: null,
			count		: 0,
			moves		: null,
		};
	}
}




/** Calculates coordinations for robots next move */
export function getRobotCoordinations( robotID: string, mineTarget: HELPERS.IActions ) : HELPERS.IGetRobotCoordinationsReturn {
	const robotPosition = document
		.getElementById(`${ robotID }`)
		.getBoundingClientRect();
	const minePosition = document
		.getElementById(`${ mineTarget }`)
		.getBoundingClientRect();
	const halfW 	= robotPosition.width / 2 + minePosition.width / 2;
	const halfH 	= robotPosition.height / 2 + minePosition.height / 2;
	const coordX 	= Math.floor( minePosition?.right - robotPosition?.left - halfW );
	const coordY 	= Math.floor( minePosition?.bottom - robotPosition?.top - halfH );

	return {
		x: coordX,
		y: coordY,
		work: {
			isActive: true,
			type: mineTarget,
		}
	};
}

/* -------------------------------------------------------------------------- */
/*                           		  EXPOSED                  	              */
/* -------------------------------------------------------------------------- */

const robotTools = {
	createRobots,
	createRobot,
	getRobotCoordinations,
};

export { robotTools };
