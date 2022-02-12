import React from 'react';

const Statistics = () => {
const id = localStorage.getItem('id');
const getLocalValues  = localStorage.getItem(id);
const localValues = JSON.parse(getLocalValues);
const nameUser = localStorage.getItem('name');
const user = {
	name: `${JSON.parse(nameUser)}`,
	gameOne: 1,
	gameTwo: 3,
	totalScore: 4
	};
if(id !== null){
  localStorage.setItem(id, JSON.stringify(user));
};
	return (
		<div className='statistics'>
			<div className='statistic-user-title'>{localValues? localValues.name :'No user in login'}</div>
      <h3 className='st-title'>Day Statistic </h3>
			<div className="st-games-container">
				<div className="st-game">Game One
				  <div className="game-score">{localValues? localValues.gameOne :0}</div>
				</div>
				<div className="st-game">Game Two
				<div className="game-score">{localValues? localValues.gameTwo :0}</div>
				</div>
			</div>
			<div className="st-total-count">Total Score
			<div className="total-score">{localValues? localValues.totalScore :0}</div>
			</div>
		</div>
	);
};
export default Statistics;
