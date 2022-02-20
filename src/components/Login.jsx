import React, {useContext} from 'react';
import {Context} from '../Context';

function Login() {
	const {closeLogin,openAuth, handleGetEmail, handleGetPassword, getLoginValues} = useContext(Context);
	const showPassword = () => {
		var x = document.getElementById("login-input-psw");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	};
	return (
		<div id='login' className='login-hide'>
			<button onClick={closeLogin} className='login-close-btn'>close</button>
			<div className="login-container">
				<h4 className='login-title'>Already have an account? Log in! All fields marked with an asterisk (*) are mandatory.</h4>
				<p className='login-paragraf'>If you are not registered? Please follow the link below.</p>
				<form className="login-input-container">
					<input onChange={handleGetEmail} className='login-input' type="email" placeholder='E-mail'/>
					<input onChange={handleGetPassword}   id="login-input-psw" className='login-input' name='password' type="password" autoComplete="on" minLength={8} placeholder='Password' required/>
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
	)
};
export default Login;
