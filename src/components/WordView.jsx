import React, { useContext } from "react";
import { Context } from "../Context";
import "../components/wordView.css";

function WordView() {
  const { words, wordSchoolbook } = useContext(Context);
  const newarr = words.filter((word) => {
    return word.word === wordSchoolbook;
  });

  const playAudio = () => {
    const audio = document.getElementById("audioWord");
    audio.play();
    audio.addEventListener("ended", () => {
      const audio2 = document.getElementById("audioMeaning");
      document.getElementById("audioMeaning");
      audio2.play();
      audio2.addEventListener("ended", () => {
        const audio3 = document.getElementById("audioExample");
        document.getElementById("audioExample");
        audio3.play();
      });
    });
  };
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }
  return (
    <div className="word-view">
      {newarr.map((word) => (
        <div key={word.id} className={`word-view-card${word.group}`}>
          <img
            src={`https://rslang-team-16-server.herokuapp.com/${word.image}`}
            alt="word-img"
            width={280}
          />
          <h2 className="word-view-word">{word.word}</h2>
          <div className="word-view-word-translate">{word.wordTranslate}</div>
          <div className="word-view-transctiption">{word.transcription}</div>
          <button className="word-view-play-btn" onClick={playAudio}></button>
          <audio
            id="audioWord"
            src={`https://rslang-team-16-server.herokuapp.com/${word.audio}`}
          ></audio>
          <audio
            id="audioMeaning"
            src={`https://rslang-team-16-server.herokuapp.com/${word.audioMeaning}`}
          ></audio>
          <audio
            id="audioExample"
            src={`https://rslang-team-16-server.herokuapp.com/${word.audioExample}`}
          ></audio>
          <p>{removeTags(word.textMeaning)}</p>
          <div className="word-view-text-meaning-translate">
            {removeTags(word.textMeaningTranslate)}
          </div>
          <p className="word-view-text-example">
            {removeTags(word.textExample)}
          </p>
          <p className="word-view-text-example-translate">
            {removeTags(word.textExampleTranslate)}
          </p>
        </div>
      ))}
    </div>
  );
}
export default WordView;
