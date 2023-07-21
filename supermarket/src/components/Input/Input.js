import './Input.css';
import clsx from 'clsx';
export default function Input(props) {
	// destructure the props
	const { type = 'text', className, required, placeholder, ...rest } = props;
	// create the classNames using clsx library
	const classNames = clsx(
		{
			input: true,
		},
		className
	);
	// render the input component
	return (
		<label className='label'>
			{placeholder}
			{required && <span className='input-required'></span>}
			<div>
				<input
					className={classNames}
					type={type}
					placeholder={placeholder}
					required={required}
					{...rest}
				/>
			</div>
		</label>
	);
}
