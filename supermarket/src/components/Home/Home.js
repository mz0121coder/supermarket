import { Link } from 'react-router-dom';
import home from '../../assets/home.jpg';

export default function Home() {
	return (
		<div className='home-layout'>
			<div>
				<h1>Online shopping simplified</h1>
				<p>
					Order your groceries from <em>SuperM</em> with our easy to use app,
					and get your products delivered straight to your doorstep.
				</p>
				<Link to='/products' className='btn btn-default'>
					Start shopping
				</Link>
				<img
					src={home}
					width='350'
					height='240'
					class='rounded home-image'
					alt=''
				/>
			</div>
		</div>
	);
}
