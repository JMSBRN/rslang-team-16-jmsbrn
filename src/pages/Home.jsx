import React from 'react';
import { Link } from 'react-router-dom';
import mainPage from '../components/assets/img/main-jpg.webp'

const Home = () => {
	return (
	<div className='home'>
    <div className="home-main-title">
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis asperiores expedita animi architecto culpa possimus explicabo temporibus labore aliquam commodi.</h1>
      <div className="home-description-container">
			<h3 className='home-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ex maxime repudiandae architecto doloribus animi.</h3>
			</div>
    </div>
		<button className='home-video-btn'>Video</button>
    <div className="home-main-img-container">
      <img src={mainPage} alt='img.jpg' width="400" height="350"/>
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
