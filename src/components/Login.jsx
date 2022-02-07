import React, {useContext} from 'react';
import {Context} from '../Context';

function Login() {
	const {closeLogin} = useContext(Context);
	return (
	<div id='login' className='login-hide'>
		<button onClick={closeLogin} className='login-close-btn'>close</button>
	</div>
	);
}
export default Login;
