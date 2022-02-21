import React from 'react';


const About = () => {
	return (<div className='about'>
		<div className="about-title">
We are students! Work hard and hope for the best!!! </div>
		  <div className="students-cards-container">
				<div className="students-card">
					  <div className='student-foto-one'></div>
						<div className="studet-work-with-title">
						  Dedelops: game Sprint
						</div>
						<a className='about-cv-link' href="https://lelek337.github.io/rsschool-cv/">CV</a>
				</div>
				<div className="students-card">
				<div className='student-foto-two'></div>
						<div className="studet-work-with-title">
						  Develops: game AudioCall 
						</div>
						<a className='about-cv-link' href="https://debaev.github.io/rsschool-cv/">CV</a>
				</div>
				<div className="students-card">
				<div className='student-foto-three'></div>
						<div className="studet-work-with-title">
						  Develops: Shoolbook, frontend, backend, 
						</div>
						<a className='about-cv-link' href="https://jmsbrn.github.io/rsschool-cv/">CV</a>
				</div>
			</div>
		</div>);
};
export default About;
