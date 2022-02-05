import React, {useState} from 'react';
import {getWords} from './Api';

function App() {

  const [words, setWords] = useState([]);
  const [groups, setGroups] = useState(1);


  const handlerGetWords = () => {
    getWords(groups,1).then(resp => 
      setWords(resp.items)
      )
  }

  const handlerSetGroupInc = () => { 
    if (groups < 5 ){
      setGroups(groups + 1)
    }else {
      setGroups(groups - 0)
    }
  }
  const handlerSetGroupDecr = () => {
    if (groups > 1 ){
      setGroups(groups - 1)
    }else {
      setGroups(groups + 0)
    }
  }

  return (
    <div className="App">
      <button onClick={handlerSetGroupInc}> Set Group +</button>
      <button onClick={handlerSetGroupDecr}> Set Group -</button>
      <button onClick={handlerGetWords}>Get words</button>
      <div>{`Group = ${groups}`}</div>
      <div>{
        words.map(word => 
          <div className='words' key={word.id}>{`word is = ${word.word}`}</div>
          )
        }</div>
    </div>
  );
}

export default App;
