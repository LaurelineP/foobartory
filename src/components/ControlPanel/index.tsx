import 	"./styles.scss";

export default function ControlPanel({ children } ) {
	return (
		<div id="control-panel-container" data-testid = "control-panel-container" >
			<h1>Control Panel</h1>
			<div id="buttons-container" data-testid = "buttons-container">
				{ children || null }
			</div>
		</div>
	);
}
