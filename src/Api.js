
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
  console.log(content);
	localStorage.setItem('user', JSON.stringify(user))
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
  console.log(content);
	localStorage.setItem('userId', JSON.stringify(content.userId))
	localStorage.setItem('userToken', JSON.stringify(content.token))
};




