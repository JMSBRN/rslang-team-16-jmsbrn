import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";
import CorrectSound from '../sounds/correct.mp3'
import ErrorSound from '../sounds/error.mp3'
import "./AudioGameField.css";
import AudioGameNav from "../AudioGameNav";
import Loader from "../Loader";

function useEventListener(eventName, handler, element = window){
  // https://usehooks.com/useEventListener/
  
  const savedHandler = useRef();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      const eventListener = event => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] 
  );
};

const AudioGameField = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  const [star, setStar] = useState(5);
  const [showAnswer, setShowAnswer] = useState(false);
  const [words, setWords] = useState([]);
  const [list, setList] = useState([]);
  const [word, setWord] = useState({});
  const [score, setScore] = useState(10);
  const [loader, setLoader] = useState(false);
  const [isMute, setMute] = useState(false);
  const [usedWords, setUsedWords] = useState(0);
  const levelParam = useParams();


  useEffect(() => {
    getWords();
  }, []);
  
  useEventListener("keydown", (e)=> {
    if(e.key > 0 && e.key < 6) {
      getAnswerByKeyboard(e.key);
    } else if (e.key === 'ArrowRight') {
      getRandomWords(list);
    } else if (e.key === 'ArrowLeft') {
      setShowAnswer(true);
      setStar(star - 1);
      playWrongSound();
    }
  });
   
  
  const getWords = (p = 0) => {
    setLoader(true);
    axios
      .get(`https://rslang-team-16-server.herokuapp.com/words?group=${+levelParam.id - 1}&page=${p}`)
      .then((res) => {
        getRandomWords(res.data ? res.data : []);
        setList(res.data ? res.data : []);
        setLoader(false);
      })
      .catch((err) => {});
  };

  const getRandomWords = (items = []) => {
    setShowAnswer(false);
    if (items.length > 5) {
      let randomWords = [];
      while (randomWords.length < 5) {
        const randomWord = items[Math.floor(Math.random() * items.length)];
        if (!randomWords.includes(randomWord)) {
          randomWords.push(randomWord);
        }
      }
      const targetWord =
        randomWords[Math.floor(Math.random() * randomWords.length)];
      playAudio(`https://rslang-team-16-server.herokuapp.com/${type === "word" ? targetWord.audio : targetWord.audioMeaning}`);
      setWord(targetWord);
      setWords(randomWords);
    } else {
      setWords([]);
    }
  };
  const spellingWord = new Audio();
  
  const playAudio = (src) => {
    spellingWord.src = src ? src : `https://rslang-team-16-server.herokuapp.com/${
      type === "word" ? word.audio : word.audioMeaning
    }`;
    spellingWord.play();
  };
  const playCorrectSound = () => {
    const correct = new Audio();
    isMute ? correct.muted = true : correct.muted = false;
    correct.src = CorrectSound;
    correct.play();
  };
  const playWrongSound = () => {
    const wrong = new Audio();
    isMute ? wrong.muted = true : wrong.muted = false;

    wrong.src = ErrorSound;
    wrong.play();
  };

  const getRightAnswer = (id) => {
    setShowAnswer(true);
    if (id === word.id) {
      playCorrectSound();
      setScore(score + 10);
    } else {
      setStar(star - 1);
      playWrongSound();
    }
  };
  
  const getAnswerByKeyboard = (index) => {
    setShowAnswer(true);
    if(   words[index-1].id === word.id) {
      playCorrectSound();
      setScore(score + 10);
    } else {
      setStar(star - 1);
      playWrongSound();
    }
  }

  return (
    <>
      {loader === true ? (
        <Loader />
      ) : (
        <div className="game-container">
          <AudioGameNav
            star={star}
            score={score}
            isMute={isMute}
            setMute={setMute}
          />
          <div className="audio-game-field">
            <div className={star < 1 ? "pop-up none" : "pop-up"}>
              <p>Your score is : {score}</p>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </div>
            <button
              className="audio-game-listen-btn"
              onClick={() => playAudio()}
            ></button>
            <p
              className={showAnswer ? "hidden-word show" : "hidden-word"}
              dangerouslySetInnerHTML={{
                __html:
                  type === "word" ? word.word?.toLowerCase() : word.textMeaning,
              }}
            />
            <div className="audio-game-word-list">
              {words.map((item, index) => (
                <button
                  disabled={!showAnswer ? false : true}
                  key={item.id}
                  className={
                    showAnswer && item.id === word.id
                      ? "option-word-btn true"
                      : !showAnswer
                      ? "option-word-btn"
                      : "option-word-btn false"
                  }
                  value={item.word}
                  onClick={() => {
                    getRightAnswer(item.id);
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      index +
                      1 +
                      ". " +
                      (type === "word" ? item.wordTranslate : item.word),
                  }}
                />
              ))}
            </div>
            <button
              className="next-btn"
              onClick={() => {
                getRandomWords(list);
              }}
            >
              <BsArrowRight />
            </button>
            <button
              disabled={!showAnswer ? false : true}
              className={"audio-no-answer"}
              onClick={() => {
                setShowAnswer(true);
                playWrongSound();
                setStar(star - 1);
              }}
            >
              No answer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioGameField;
