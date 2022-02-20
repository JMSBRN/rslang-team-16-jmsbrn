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
	</div>
	);
};
export default Games;
