import React, {useContext} from 'react';
import {Context} from '../Context';

function Login() {
	const {closeLogin} = useContext(Context);
	return (
	<div id='login' className='login-hide'>
		<button onClick={closeLogin} className='login-close-btn'>close</button>
		<div className="login-container">
			<h4 className='login-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eos dolorem consectetur amet ducimus.</h4>
			<p className='login-paragraf'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ipsum numquam voluptate atque, iure voluptatum dicta nisi ratione soluta tempore!</p>
			<div className="login-input-container">
				<input className='login-input' type="text" placeholder='E-mail'/>
				<input className='login-input' type="text" placeholder='Password'/>
				<button className='login-submit-btn'>Submiit</button>
			</div>
			<div className="login-links-container">
				<a className='login-link' href="/#">Forgot your passowrd?</a>
				<a className='login-link' href="/#">Registration</a>
			</div>
		</div>
	</div>
	);
}
export default Login;
