import { useState, useEffect } from "react";
import axios from "axios";

import "./AudioGameField.css";
import AudioGameNav from "../AudioGameNav";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const AudioGameField = () => {
  const navigate = useNavigate();
  const [star, setStar] = useState(5);
  const [showAnswer, setShowAnswer] = useState(false);
  const [words, setWords] = useState([]);
  const [list, setList] = useState([]);
  const [word, setWord] = useState({});
  const [score, setScore] = useState(10);
  const [loader, setLoader]= useState(false)

  useEffect(() => {
    getWords();
  }, []);
  
  const getWords = () => {
    setLoader(true)
    axios
      .get("https://rslang-team-16-server.herokuapp.com/words")
      .then((res) => {
        getRandomWords(res.data?res.data:[]);
        setList(res.data?res.data:[]);
        setLoader(false)
      })
      .catch((err) => {});
  };
  
  const getRandomWords = (items = []) => {
    setShowAnswer(false);
    if(items.length>5){
      let randomWords = [];
      while(randomWords.length<5){
        const randomNum = items[Math.floor(Math.random()*items.length)];
        if(!randomWords.includes(randomNum)){
          randomWords.push(randomNum);
        }
      }
      const targetWord = randomWords[Math.floor(Math.random()*randomWords.length)];
      setWord(targetWord);
      setWords(randomWords);
    } else {
      setWords([]);
    }
  }

  const playAudio = () => {
    const spellingWord = new Audio();
    spellingWord.src = `https://rslang-team-16-server.herokuapp.com/${word.audio}`;
    spellingWord.play();
  };
  const playCorrectSound =() => {
    const correct = new Audio();
    correct.src = `https://rslang-team23-alexk08.netlify.app/audio/correct.mp3`;
    correct.play();
  }
  const playWrongSound =() => {
    const wrong = new Audio();
    wrong.src = `https://rslang-team23-alexk08.netlify.app/audio/error.mp3`;
    wrong.play();
  }
  
  
  const getRightAnswer = (id) => {
    setShowAnswer(true)
    if (id === word.id) {
      playCorrectSound();
      setScore(score + 10);
      // getRandomWords(list);
    } else {
      setStar(star-1);
      playWrongSound();
      // getRandomWords(list);
    }
  }

  return (
    <>
    {loader===true?  <Loader/>:
    <>
    <AudioGameNav star={star} score={score}/>
    <div className="audio-game-field">
      <div className={star<1? "pop-up none": 'pop-up'}>
        <p>siznig balingiz : {score}</p>
        <button onClick={()=>{navigate('/')}}>bosh saxifaga</button>
      </div>
      <button className="audio-game-listen-btn" onClick={() => playAudio()}>
        <img
          src="https://rslang-team23-alexk08.netlify.app/images/games/sound-waves.png"
          alt=""
          />
      </button>
      <div className="audio-game-word-list">
        {words.map((item, index) => (
          <button disabled={!showAnswer ? false : true} key={index} className={( showAnswer && item.id === word.id) ? 'option-word-btn true' : 'option-word-btn false'} value={item.word} onClick={()=>
            {getRightAnswer(item.id)}}>{index+1}. {item.wordTranslate}</button>
          ))}
      </div>
      <button className="next" onClick={()=> {
        getRandomWords(list);
      }}>Next</button>
      <button disabled={!showAnswer ? false : true} className={"audio-no-answer"} onClick={()=> {
        setShowAnswer(true);
        playWrongSound();
        setStar(star-1);
      }}>No answer</button>
    </div> 
    </>
    }
   
   
          </>
  );
};

export default AudioGameField;
