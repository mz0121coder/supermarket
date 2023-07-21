import './Button.css';
import clsx from 'clsx';

export default function Button(props) {
	// destructuring the props object
	const { className, children, outline, ...rest } = props;
	// defining the classNames variable using clsx function
	const classNames = clsx(
		{
			btn: true,
			'btn-default': !outline,
			'btn-outline': outline,
		},
		className
	);
	// returning the button element with the classNames and rest props
	return (
		<button className={classNames} {...rest}>
			{children}
		</button>
	);
}
