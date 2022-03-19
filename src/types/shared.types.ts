// implementation
export interface IButton extends React.ComponentPropsWithoutRef<"button"> {
	children		: React.ReactNode | string;
	["data-action"]	: "start" | "stop" | "create-new-bot" | string;
	onClick( event	: React.MouseEvent<HTMLButtonElement>): void;
}