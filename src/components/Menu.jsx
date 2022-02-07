import React,{useContext, useState} from 'react';
import {Context} from '../Context';
import {Link} from 'react-router-dom';

function Menu() {
  const {closeMenu} = useContext(Context)
	return (
  	<div id='menu' className="menu-hide">
			<div>
				<button onClick={closeMenu} className='menu-btn-close'>close</button>
				<Link to={'/'}>Home</Link>
				<Link to={'games'}>Games</Link>
				<Link to={'about'}>About</Link>
				<Link to={'Schoolbook'}>Schoolbook</Link>
				<Link to={'statistics'}>Statistics</Link>
			</div>
		</div>
	);
}
export default Menu;
