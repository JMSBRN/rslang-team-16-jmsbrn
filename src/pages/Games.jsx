import React,{useContext} from 'react';
import { Context } from '../Context';

const Games = () => {
const {
	countA,
	inecreaseA,
	decreaseA,
	countB,
	inecreaseB,
	decreaseB,
	countC,
	inecreaseC,
	decreaseC,
	countD,
	inecreaseD,
	decreaseD
} = useContext(Context);

const nameUser = localStorage.getItem('name');
const id = localStorage.getItem('id');
localStorage.setItem(id, JSON.stringify(
	{
		countA: `${countA}`,
		countB: `${countB}`,
		countC: `${countC}`,
		countD: `${countD}`
	}));

	return (
	<div className='games'>
		<div className="user-title">{nameUser?JSON.parse(nameUser): 'No user in login'}</div>
		<div className="game-one">
			<div className="game-title">Game-One</div>
			<div className="lerning-words">lerning-words</div>
			<div className="lerning-words-score">{countA}</div>
			<div className="games-btns-cnt">
				<button onClick={inecreaseA} className='inecrease-btn'>+</button>
				<button onClick={decreaseA} className='decrease-btn'>-</button>
			</div>
			<div className="right-unswers">right-unswers</div>
			<div className="right-unswers-score">{countB}</div>
			<div className="games-btns-cnt">
				<button onClick={inecreaseB} className='inecrease-btn'>+</button>
				<button onClick={decreaseB} className='decrease-btn'>-</button>
			</div>
		</div>
		<div className="game-two">
		<div className="game-title">Game-Two</div>
		<div className="lerning-words">lerning-words</div>
			<div className="lerning-words-score">{countC}</div>
			<div className="games-btns-cnt">
				<button onClick={inecreaseC} className='inecrease-btn'>+</button>
				<button onClick={decreaseC} className='decrease-btn'>-</button>
			</div>
			<div className="right-unswers">right-unswers</div>
			<div className="right-unswers-score">{countD}</div>
			<div className="games-btns-cnt">
				<button onClick={inecreaseD} className='inecrease-btn'>+</button>
				<button onClick={decreaseD} className='decrease-btn'>-</button>
			</div>
		</div>
	</div>
	);
};
export default Games;
