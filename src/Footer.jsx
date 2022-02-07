import React from 'react';
import imgRsSchool from '../src/components/assets/svg/rs_school_js.svg'

const Footer = () => {
	return (
	<div className='footer'>
		<div class="footer__copyright">©<span>2021 rslang-team-16</span></div>
		<div className="footer-git-links-container">
			<a className='footer-git-link' href='https://github.com/lelek337'>Ivan Hubarau</a>
			<a className='footer-git-link' href='https://github.com/debaev/'>debaev</a>
			<a className='footer-git-link' href='https://github.com/JMSBRN'>JMSBRN</a>
		</div>
		<img src={`${imgRsSchool}`} alt='rsSchool/svg' width="50" height="20"></img>
		<a className='footer-rsSchool-link' href='https://rs.school/js/'>rsSchool</a>
		</div>
	);
};
export default Footer;

