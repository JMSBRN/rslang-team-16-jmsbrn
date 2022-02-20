import React from 'react';
import { Link } from 'react-router-dom';
import img from '../components/assets/img/gearl- with-notebook.png'
const Home = () => {
	return (
	<div className='home'>
    <div className="home-title">
      <h1>Speak with planet</h1>
      <div className="home-description-container">
			<h3 className='home-description'>If you really want to learn english? It's time...</h3>
			</div>
    </div>
		<div className="home-main-container">
			<img className='home-img' src={img} alt="home-img"/>		
				<div className='home-nav-links'>
					<Link className='home-link' to={'/'}>Home</Link>
					<Link className='home-link' to={'games'}>Games</Link>
					<Link className='home-link' to={'about'}>About</Link>
					<Link className='home-link' to={'schoolbook'}>Schoolbook</Link>
					<Link className='home-link' to={'statistics'}>Statistics</Link>
				</div>
		</div>
	</div>
	);
};
export default Home;
