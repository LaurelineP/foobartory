import { MutableRefObject } from "react";

export type TRobotAction = "standby" | "move" | "mine" | "gather" | "forge";
export interface IRobotMiner {
	ref?			: MutableRefObject<any>;
	id			: number;
	name		: string;
	currAction	: TRobotAction;
	nextAction?	: TRobotAction;
	count		: number;
	moves?		: { x: number; y: number };
	work?		: {
		isActive	: boolean;
		type		: IActions;
	};
}

export type IActions = "foo-mine" | "bar-mine" | "foobar-mine";
export interface IGetRobotCoordinationsReturn {
	x: number;
	y: number;
	work: {
		isActive: boolean;
		type?: IActions;
	}
}