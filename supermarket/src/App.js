import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	function handleButtonClick() {
		console.log('Button clicked');
	}
	function handleLastNameInput() {
		console.log('Last name changed');
	}

	// trying different styles for Button and Input components
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '20px',
				flexWrap: 'wrap',
			}}>
			<Button>Normal</Button>
			<Button outline>Outline</Button>
			<Button className='extra-class' onClick={handleButtonClick}>
				Customizable
			</Button>
			<Input placeholder='First name' />
			<Input placeholder='Last name' onInput={handleLastNameInput} />
			<Input placeholder='Email' type='email' required />
		</div>
	);
}

export default App;
