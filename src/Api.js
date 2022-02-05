import React from 'react';


const base = 'https://rslang-team-16-server.herokuapp.com';
const words = `${base}/words`;


export const getWords = async (group, page) => {
	const response = await await fetch(`${words}?group=${group}&page=${page}`);
	return {
		items: await response.json(),
		count: response.headers.get('X-Total-Count')

	};
};







const Api = () => {
	return <div></div>;
};

export default Api;
