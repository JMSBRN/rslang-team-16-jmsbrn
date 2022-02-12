import React from 'react';

const Statistics = () => {
const id = localStorage.getItem('id');
const getLocalValues  = localStorage.getItem(id);
const nameUser = localStorage.getItem('name');
const localValues = JSON.parse(getLocalValues);
	return (
		<div className='statistics'>
			<div className='statistic-user-title'>{nameUser?JSON.parse(nameUser): 'No user in login'}</div>
      <h3 className='st-title'>Day Statistic </h3>
			<div className="st-games-container">
				<div className="st-game">Game One
					<div className="lerning-words">lerning-words</div>
				  <div className="game-score">{localValues?localValues.countA:0}</div>
			<div className="lerning-words-score"></div>
			<div className="right-unswers">right-unswers</div>
			<div className="right-unswers-score">{localValues?localValues.countB: 0}</div>
				</div>
				<div className="st-game">Game Two
				<div className="lerning-words">lerning-words</div>
				<div className="game-score">{localValues?localValues.countC:0}</div>
			<div className="lerning-words-score"></div>
			<div className="right-unswers">right-unswers</div>
			<div className="right-unswers-score">{localValues?localValues.countD:0}</div>
				</div>
			</div>
			<div className="st-total-count">Total Score
			<div className="total-score">{localValues? localValues.totalScore :0}</div>
			</div>
		</div>
	);
};
export default Statistics;
