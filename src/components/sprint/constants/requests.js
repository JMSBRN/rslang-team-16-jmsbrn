

const bas = 'https://rslang-team-16-server.herokuapp.com';
const words = `${bas}/words/`;

 export const getWords = async() => {
//  const res = await fetch(`${words}?group=${group}&page=${page}`)
 const res = await fetch(words)
  .then((response) => {
    return  response.json();   
  })
  .then((data) => {
    // console.log(data)
    // dataWords(data)
    return data
  }); 
  return res
}

 export const dataWords = (data) => {
  // window.sessionStorage.setItem("items", JSON.stringify(data));
 return data;
};



