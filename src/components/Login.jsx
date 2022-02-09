import React, {useContext} from 'react';
import {Context} from '../Context';

function Login() {
	const {closeLogin,openAuth, handleGetEmail, handleGetPassword, getLoginValues} = useContext(Context);
	function showPassword() {
		var x = document.getElementById("login-input-psw");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

	return (
	<div id='login' className='login-hide'>
		<button onClick={closeLogin} className='login-close-btn'>close</button>
		<div className="login-container">
			<h4 className='login-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eos dolorem consectetur amet ducimus.</h4>
			<p className='login-paragraf'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ipsum numquam voluptate atque, iure voluptatum dicta nisi ratione soluta tempore!</p>
			<form className="login-input-container">
				<input onChange={handleGetEmail} className='login-input' type="email" placeholder='E-mail'/>
				<input onChange={handleGetPassword}   id="login-input-psw" className='login-input' type="password"  minLength={8} placeholder='Password' required/>
				<button onClick={getLoginValues} className='login-submit-btn'>Login</button>
			</form>
			<input onClick={showPassword} type="checkbox" name="login-show-psw"/>
			<span className='login-checkbox-title'>Show Password</span>
			<div className="login-links-container">
				<a className='login-link' href="/#">Forgot your passowrd?</a>
				<a onClick={openAuth} className='login-link' href="/#">Registration</a>
			</div>
		</div>
	</div>
	);
}
export default Login;
