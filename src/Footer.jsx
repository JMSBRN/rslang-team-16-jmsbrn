import React from 'react';
import imgRsSchool from '../src/components/assets/svg/rs_school_js.svg'
import gitLogo from '../src/components/assets/svg/github.svg'
const Footer = () => {
	return (
		<div className='footer'>
			<div className="footer__copyright">©<span>2021 rslang-team-16-Q3</span></div>
			<div className="footer-git-links-container">
				<a className='footer-git-link' href='https://github.com/lelek337'>Ivan Hubarau</a>
			  <img src={gitLogo} alt="git_logo" width={18} />
				<a className='footer-git-link' href='https://github.com/debaev/'>debaev</a>
				<img src={gitLogo} alt="git_logo" width={18} />
				<a className='footer-git-link' href='https://github.com/JMSBRN'>JMSBRN</a>
				<img src={gitLogo} alt="git_logo" width={18} />
			</div>
			<img src={`${imgRsSchool}`} alt='rsSchool/svg' width="50" height="20"></img>
			<a className='footer-rsSchool-link' href='https://rs.school/js/'>The Rolling Scopes</a>
		</div>
	);
};
export default Footer;

