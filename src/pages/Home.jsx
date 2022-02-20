import React from 'react';
import { Link } from 'react-router-dom';
import imgGirl from '../components/assets/img/gearl- with-notebook.png'
import imgMen from '../components/assets/img/men-with-laptop.png'
const Home = () => {
	return (
	<div className='home'>
    <div className="home-title">
      <h1>Speak with planet</h1>
      <div className="home-description-container">
			<h3 className='home-description'>If you really want to learn english? It's time...</h3>
			</div>
    </div>
		<h3 className="home-links-title">Follow the links and enjoy!</h3>
		<div className="home-main-container">
			<img className='home-img-girl' src={imgGirl} alt="home-img"/>		
				<div className='home-nav-links'>
					<Link className='home-link' to={'/'}>Home</Link>
					<Link className='home-link' to={'games'}>Games</Link>
					<Link className='home-link' to={'about'}>About</Link>
					<Link className='home-link' to={'schoolbook'}>Schoolbook</Link>
					<Link className='home-link' to={'statistics'}>Statistics</Link>
				</div>
				<img className='home-img-men' src={imgMen} alt="home-img"/>
		</div>
	</div>
	);
};
export default Home;
