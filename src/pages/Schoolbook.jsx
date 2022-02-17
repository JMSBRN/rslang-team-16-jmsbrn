
import React, {useEffect, useContext } from "react";
import WordsPagination from "../components/WordsPagination";
import WordView from "../components/WordView";
import { Context } from "../Context";

function Schoolbook() {
  const { getWordsHandle, words, pagePagination, setStageNumToLocal, stages, group, getWordValue} = useContext(Context);
  if(pagePagination !== null ){
    localStorage.setItem('page', JSON.stringify(pagePagination));
  }else {
    localStorage.setItem('page', JSON.stringify(0));
    localStorage.setItem('group', JSON.stringify(0));
    window.location.reload();
  };
  useEffect(() => {
    getWordsHandle();
  },[pagePagination, group]);

  return (
    <div className="schoolbook">
      <div className="schoolbook-stages">
        {stages.map(stage =>
           <button key={stage} onClick={setStageNumToLocal} data-num={stage-1} className="stage">{`stage ${stage}`}</button>
          )}
      </div>
        <div className="words-title">Words</div>
      <div className="words-container">
        <div className="words">
          {words.map((word) => (
            <button id="word-card" className="word-card" onClick={getWordValue} data-word={word.word} key={word.word} >
              <div onClick={getWordValue} data-word={word.word}  className="word">
                {word.word}
                <div onClick={getWordValue} data-word={word.word} className="word-translate">{word.wordTranslate}</div>
              </div>
            </button>
          ))}
        </div>
        <WordView/>
      </div>
      <WordsPagination/>
    </div>
  );
}
export default Schoolbook;
