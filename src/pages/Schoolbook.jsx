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
  const setWordTolearnToLocal = (e,word) => {
    if(!newArr.includes(word)){
      newArr.push(word);
      localStorage.setItem('wordToLearn',JSON.stringify(newArr));
    }
    e.target.classList.toggle('done');
  };
   const toggleClassDone = (e) => {
     e.target.classList.toggle('done');
   };
  return (
    <div className="schoolbook">
      <div className="schoolbook-stages">
        {stages.map((stage) => (
          <button
            key={stage}
            onClick={setStageNumToLocal}
            data-num={stage - 1}
            className={`stage${stage-1}`}
          >{`stage ${stage}`}</button>
        ))}
       {localStorage.getItem('id')? 
       <button className="stage">
         <NavLink
          to={'dictionary'}
          >Dictionary</NavLink>
       </button>: ''}
      </div>
      <div className="stage-title">Stage {group / 1 + 1}</div>
      <div className="schoolbook-words-title">Words</div>
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
              {
                localStorage.getItem('id')? 
                <div 
                onClick={toggleClassDone}
                data-done={word.word}
                className="studied-word-btn"
                >
                studied
                </div>:''
               }
              <div
                onClick={getWordValue}
                data-word={word.word}
                className={`word${word.group}`}
              >
                {word.word}
                <div
                  data-word={word.word}
                  className="word-translate"
                >
                  {word.wordTranslate}
                </div>
              </div>
              {
                localStorage.getItem('id')? 
                <div onClick={(e) => setWordTolearnToLocal(e,word.word)}
                className="put-in-dictionary-btn"
                >
                difficult
                </div>: ''
               }
            </button>
          ))}
        </div>
        <div className="word-view-layout"></div>
        <WordView />
      </div>
      <WordsPagination />
      <div className="schoolbook-games-container">
        <div className="schoolbook-games-title">Let's Play Games :)</div>
        <div className="schoolbook-games-links">
          <NavLink to={'/sprint'}>Sprint</NavLink>
          <NavLink to={'/audioCall'}>AudioCall</NavLink>
        </div>
      </div>
    </div>
  );
}
export default Schoolbook;
