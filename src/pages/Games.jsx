import React,{useState} from 'react';

const Games = () => {
 const [countA, setCountA] = useState(0);
 const [countB, setCountB] = useState(0);
 const [countC, setCountC] = useState(0);
 const [countD, setCountD] = useState(0);
 const nameUser = localStorage.getItem('name');
 const inecreaseA = () => {

		setCountA(countA + 1);
 };
 const decreaseA = () => {
	 if(countA > 0){
		setCountA(countA - 1);
	 }
 };
 const inecreaseB = () => {
	 setCountB(countB + 1);
 };
 const decreaseB = () => {
	 if(countB > 0){
		setCountB(countB - 1);
	 }
 };
 const inecreaseC = () => {
	 setCountC(countC + 1);
 };
 const decreaseC = () => {
	 if(countC > 0){
    setCountC(countC - 1);
	 }
 };
 const inecreaseD = () => {
	 setCountD(countD + 1);
 };
 const decreaseD = () => {
	 if(countD > 0){
		setCountD(countD - 1);
	 }
 };
	return (
	<div className='games'>
		<div className="user-title">{JSON.parse(nameUser)}</div>
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
