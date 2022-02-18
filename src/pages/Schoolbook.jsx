import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import WordsPagination from "../components/WordsPagination";
import WordView from "../components/WordView";
import { Context } from "../Context";

function Schoolbook() {
  const {
    getWordsHandle,
    words,
    pagePagination,
    setStageNumToLocal,
    stages,
    group,
    getWordValue,
  } = useContext(Context);
  if (pagePagination !== null) {
    localStorage.setItem("page", JSON.stringify(pagePagination));
  } else {
    localStorage.setItem("page", JSON.stringify(0));
    localStorage.setItem("group", JSON.stringify(0));
    window.location.reload();
  }
  useEffect(() => {
    getWordsHandle();
  }, [pagePagination, group]);
  const newArr = JSON.parse(localStorage.getItem('wordToLearn'));
  const setWordTolearnToLocal = (word) => {
    if(!newArr.includes(word)){
      newArr.push(word);
      localStorage.setItem('wordToLearn',JSON.stringify(newArr))
    }
  };
  return (
    <div className="schoolbook">
      <div className="schoolbook-stages">
        {stages.map((stage) => (
          <button
            key={stage}
            onClick={setStageNumToLocal}
            data-num={stage - 1}
            className="stage"
          >{`stage ${stage}`}</button>
        ))}
       {localStorage.getItem('id')? 
       <button className="stage">
         <NavLink
          to={'dictionary'}
          >Dictionary</NavLink>
       </button>: " "}
      </div>
      <div className="stage-title">Stage {group / 1 + 1}</div>
      <div className="words-container">
        <div className="words">
          {words.map((word) => (
            <button
              id="word-card"
              className="word-card"
              onClick={getWordValue}
              data-word={word.word}
              key={word.word}
            >
              <div
                onClick={getWordValue}
                data-word={word.word}
                className="word"
              >
                {word.word}
                <div
                  data-word={word.word}
                  className="word-translate"
                >
                  {word.wordTranslate}
                </div>
              </div>
              {localStorage.getItem('id')? 
              <div onClick={() => setWordTolearnToLocal(word.word)} className="put-in-ndictionary-btn">difficult</div>: ''}
            </button>
          ))}
        </div>
        <WordView />
      </div>
      <WordsPagination />
    </div>
  );
}
export default Schoolbook;
