import React,{useContext} from 'react'
import { Context } from '../Context'


function Auth() {
	const {closeAuth, handleGetEmail, handleGetPassword, getRegistrValues} = useContext(Context);

	function showPassword() {
		var x = document.getElementById("auth-input-psw");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}
	return (
		<div>
				<div id='auth' className='auth-hide'>
		<button onClick={closeAuth} className='auth-close-btn'>logout registration</button>
		<div className="auth-container">
			<h4 className='auth-title'>Lorem ipsum dolor sit amet consectetur</h4>
			<p className='auth-paragraf'>Lorem ipsum dolor sit!</p>
			<form className="auth-input-container">
				<input onChange={handleGetEmail} className='auth-input' type="email" placeholder='E-mail'/>
				<input onChange={handleGetPassword}id="auth-input-psw"  className='auth-input' type="password"minLength={8} placeholder='Password' required/>
				<button onClick={getRegistrValues} className='auth-submit-btn'>Register</button>
			</form>
			<input onClick={showPassword} type="checkbox" name="auth-show-psw"/>
			<span className='auth-checkbox-title'>Show Password</span>
			<div className="auth-links-container">		
			</div>
		</div>
	</div>
			</div>
	)
}

export default Auth