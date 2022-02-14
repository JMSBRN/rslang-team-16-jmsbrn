
const base = 'https://rslang-team-16-server.herokuapp.com';
const words = `${base}/words`;
const users = `${base}/users`;
const signIn = `${base}/signin`;

export const getWords = async (group, page) => {
	const response =  await fetch(`${words}?group=${group}&page=${page}`);
	return {
		items: await response.json()
	};

};
export const createUser = async (user) => {
	const rawResponse = await fetch(users, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});
	const content = await rawResponse.json();
	localStorage.setItem('name', JSON.stringify(content.name))	
	localStorage.setItem('email', JSON.stringify(content.email))	
	localStorage.setItem('user', JSON.stringify(content.email))	


};
export const loginUser = async (user )=> {
  const rawResponse = await fetch(signIn, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json()
  localStorage.setItem('token', JSON.stringify(content.token))
	localStorage.setItem('name', JSON.stringify(content.name))
  localStorage.setItem('refreshToken', JSON.stringify(content.refreshToken))
	localStorage.setItem('id', JSON.stringify(content.userId))
};

