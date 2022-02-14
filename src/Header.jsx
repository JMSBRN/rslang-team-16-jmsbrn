import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from './Context';

const Header = () => {
 const {openMenu, openLogin, clearLocalStorage} = useContext(Context);


	return (
	 <div className='header'>
			 <ul className='header-nv-btns'>
				<button className='header-nav-btn'>
					<NavLink to={'/'} className={({isActive})=> isActive ? 'active-link' : ''}>Home</NavLink>
				</button>
				<button className='header-nav-btn'>
					<NavLink  to={'games'} className={({isActive})=> isActive ? 'active-link' : ''} >Games</NavLink>
				</button>
				<button className='header-nav-btn'>
					<NavLink to={'about'} className={({isActive})=> isActive ? 'active-link' : ''} >About</NavLink>
				</button>
				<button className='header-nav-btn'>
					<NavLink to={'schoolbook'} className={({isActive})=> isActive ? 'active-link' : ''} >Schoolbook</NavLink>
				</button >
				<button className='header-nav-btn'>
					<NavLink  to={'statistics'} className={({isActive})=> isActive ? 'active-link' : ''} >Statistics</NavLink>
				</button>
			 </ul> 
			 <div className="login-menu-btns-container">
				 <div className="out-btn">
						<button onClick={clearLocalStorage} className='out-btn'>Log-out</button>
				 </div>
				 <div className="login-btn">
						<button onClick={openLogin} className='login-btn'>Login</button>
				 </div>
				 <div  className="menu-btn">
						<button onClick={openMenu} className='menu-btn'>Menu</button>
				 </div>
			 </div>
	 </div>
	);
};
export default Header;
