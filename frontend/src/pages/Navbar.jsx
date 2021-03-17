import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav-container'>
			<h1>
				<Link to='/'>Pollen</Link>
			</h1>
			<ul className='nav-links'>
				<li>
					<Link to='/example'>Example</Link>
				</li>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/map'>Map</Link>
				</li>
				<li>
					<Link to='/login'>Log In</Link>
				</li>
				<li>
					<Link to='/signup'>Sign Up</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
