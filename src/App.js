import MainCenter from './components/main/mainJs';
import HeaderSprint from './components/header/header';
import Button from './elements/button/button-sprint';
import { getWords } from './constants/requests';
import { useState, useEffect } from 'react';

import './App.css';



function App() {

  const bas = 'https://rslang-team-16-server.herokuapp.com';
  const myWords = `${bas}/words/`;

  // const [autoplay, setAutoplay] = useState(false);
  // console.log(words)
 
  const [groups, setgroups] = useState(1);
  const [words, setWords] = useState([]);
  let [word, setWord] = useState()
  const start = () => {
    getWords(groups, 1).then(resp => 
       setWords(resp)
        )
  }
  

  
   useEffect(() => {
     let i = 0;
    const interval = setInterval(() => {
     if (i===words.length) {
       return
     }    
      console.log(words[i]);
      setWord(words[i]);
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  // useEffect(() => {
  //   console.log('hello')
  // }, [words])

  return (
    <div className="App">
      <HeaderSprint />
      <Button name={'start-sprint'} text={'Start'} click={start}/>
      <MainCenter
      myWord={word ? word.word : null} 
      myWordTranslate={word ? word.wordTranslate : null}
      />
    </div>
  );
}

export default App;
