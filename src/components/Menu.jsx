import React,{useContext} from 'react';
import {Context} from '../Context';
import {Link} from 'react-router-dom';

function Menu() {
  const {closeMenu} = useContext(Context)
	return (
  	<div id='menu' className="menu-hide">
			<button onClick={closeMenu} className='menu-btn-close'></button>
			<div className='menu-nav-links'>	
				<Link className='menu-link' to={'/'}>Home</Link>
				<Link className='menu-link' to={'games'}>Games</Link>
				<Link className='menu-link' to={'about'}>About</Link>
				<Link className='menu-link' to={'schoolbook'}>Schoolbook</Link>
				<Link className='menu-link' to={'statistics'}>Statistics</Link>
			</div>
		</div>
	);
}
export default Menu;
