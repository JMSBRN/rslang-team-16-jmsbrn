import React from 'react';

const Statistics = () => {
const id = localStorage.getItem('id');
const getLocalValues  = localStorage.getItem(id);
const nameUser = localStorage.getItem('name');
const localValues = JSON.parse(getLocalValues);
	return (
		<div className='statistics'>
			<div className='statistic-user-title'>{nameUser?JSON.parse(nameUser): 'No user in login'}</div>
      
		</div>
	);
};
export default Statistics;
