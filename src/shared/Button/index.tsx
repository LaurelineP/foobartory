import 						'./styles.scss';

export default function Button({ children, ...props }) {
	return <button { ...props }>{ children }</button>;
}
