import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => {
	return (
	 <div className='header'>
			 <ul className='header-nv-btns'>
				<button className='header-btn'>
					<NavLink to={'/'} className={({isActive})=> isActive ? 'active-link' : ''}>Home</NavLink>
				</button>
				<button className='header-btn'>
					<NavLink to={'games'} className={({isActive})=> isActive ? 'active-link' : ''} >Games</NavLink>
				</button>
				<button className='header-btn'>
					<NavLink to={'about'} className={({isActive})=> isActive ? 'active-link' : ''} >About</NavLink>
				</button>
				<button className='header-btn'>
					<NavLink to={'shoolbook'} className={({isActive})=> isActive ? 'active-link' : ''} >Schoolbook</NavLink>
				</button >
				<button className='header-btn'>
					<NavLink to={'statistics'} className={({isActive})=> isActive ? 'active-link' : ''} >Statistics</NavLink>
				</button>
			 </ul> 
	 </div>
	 );
};
export default header;
