import MainCenter from './components/main/mainJs';
import HeaderSprint from './components/header/header';
import ButtonSprint from './elements/button/button-sprint';
import { getWords } from './constants/requests';
import { useState, useEffect, useContext } from 'react';

import '../sprint/SprintMain.css';

// const SprintIndexContext = React.createContext();

function App() {

  const bas = 'https://rslang-team-16-server.herokuapp.com';
  const myWords = `${bas}/words/`;

  // const [autoplay, setAutoplay] = useState(false);
  // console.log(words)
 
  const [groups, setgroups] = useState(1);
  const [words, setWords] = useState([]);
  const [word, setWord] = useState();
  const [wordRandom, setWordRandom] = useState();
  const [sprintIndex, setSprintIndex] = useState(4)
  
  const start = () => {
    getWords(groups, 1).then(resp => 
       setWords(resp)
        )
  }

 
  
   useEffect(() => {
    let i = 0;  
    let indexSpeedSprint = 4;

    let timerId = setTimeout(function tick() {
      if (i >= words.length) {
        sessionStorage.removeItem('indexSpeedSprint');
        sessionStorage.removeItem('indexBubble');
        sessionStorage.removeItem('calcIndex');
        return
      } 
      sessionStorage.removeItem('disabledYes');
      sessionStorage.removeItem('disabledNo');
      const randomIndex = Math.floor(Math.random() * 2) + i;
      sessionStorage.setItem('indexWord', `${i}`);
      sessionStorage.setItem('randomIndex', `${randomIndex}`);      
      setWord(words[i]);
      setWordRandom(words[randomIndex]);
      i++;
      indexSpeedSprint = sessionStorage.getItem('indexSpeedSprint');
      if (!indexSpeedSprint) indexSpeedSprint = 4;
      timerId = setTimeout(tick, indexSpeedSprint*700); 
    }, indexSpeedSprint*700);
  }, [words]);

  return (
    <div className="App">
      
      <HeaderSprint />
      <ButtonSprint name={'start-sprint'} text={'Start'} click={start}/>
      <MainCenter
      myWord={wordRandom ? wordRandom.word : null} 
      myWordTranslate={word ? word.wordTranslate : null}
      />  
    
    </div>
  );
}

export default App;
