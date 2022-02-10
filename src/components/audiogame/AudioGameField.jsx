import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";

import "./AudioGameField.css";
import AudioGameNav from "../AudioGameNav";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

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
  const [level, setLevel] = useState(1);
  const [isMute, setMute] = useState(false);

  useEffect(() => {
    getWords();
  }, []);

  const getWords = () => {
    setLoader(true);
    axios
      .get("https://rslang-team-16-server.herokuapp.com/words")
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
        const randomNum = items[Math.floor(Math.random() * items.length)];
        if (!randomWords.includes(randomNum)) {
          randomWords.push(randomNum);
        }
      }
      const targetWord =
        randomWords[Math.floor(Math.random() * randomWords.length)];
      setWord(targetWord);
      setWords(randomWords);
    } else {
      setWords([]);
    }
  };

  const playAudio = () => {
    const spellingWord = new Audio();
    spellingWord.src = `https://rslang-team-16-server.herokuapp.com/${
      type === "word" ? word.audio : word.audioMeaning
    }`;
    spellingWord.play();
  };
  const playCorrectSound = () => {
    const correct = new Audio();
    isMute ? correct.muted = true : correct.muted = false;
    correct.src = `https://rslang-team23-alexk08.netlify.app/audio/correct.mp3`;
    correct.play();
  };
  const playWrongSound = () => {
    const wrong = new Audio();
    isMute ? wrong.muted = true : wrong.muted = false;

    wrong.src = `https://rslang-team23-alexk08.netlify.app/audio/error.mp3`;
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

  return (
    <>
      {loader === true ? (
        <Loader />
      ) : (
        <div className="game-container">
          <AudioGameNav star={star} score={score} isMute={isMute} setMute={setMute} />
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
                  key={index}
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
