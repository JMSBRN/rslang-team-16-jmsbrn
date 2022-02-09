import React,{useContext} from 'react'
import { Context } from '../Context'


function Auth() {
	const {closeAuth, handleGetEmail, handleGetPassword, getRegistrValues} = useContext(Context);
	return (
		<div>
				<div id='auth' className='auth-hide'>
		<button onClick={closeAuth} className='auth-close-btn'>logout registration</button>
		<div className="auth-container">
			<h4 className='auth-title'>Lorem ipsum dolor sit amet consectetur</h4>
			<p className='auth-paragraf'>Lorem ipsum dolor sit!</p>
			<div className="auth-input-container">
				<input onChange={handleGetEmail} className='auth-input' type="text" placeholder='E-mail'/>
				<input onChange={handleGetPassword} className='auth-input' type="text" placeholder='Password'/>
				<button onClick={getRegistrValues} className='auth-submit-btn'>Register</button>
			</div>
			<div className="auth-links-container">		
			</div>
		</div>
	</div>
			</div>
	)
}

export default Auth