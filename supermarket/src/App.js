import './App.css';
import Button from './components/Button/Button';

function App() {
	function handleButtonClick() {
		console.log('Button clicked');
	}

	// trying different styles for Button component
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
		</div>
	);
}

export default App;
