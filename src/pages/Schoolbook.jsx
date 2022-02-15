
import React, {useEffect, useContext } from "react";
import WordsPagination from "../components/WordsPagination";
import { Context } from "../Context";

function Schoolbook() {
  const { getWordsHandle, words, pagePagination, setStageNumToLocal, stages, group} = useContext(Context);
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
           <div key={stage} onClick={setStageNumToLocal} data-num={stage-1} className="stage">{`stage ${stage}`}</div>
          )}
      </div>
      <div className="words-title">Words</div>
      <div className="words">
        {words.map((word) => (
          <div key={word.word} className="word-card">
            <div className="word">
              {word.word}
              <div className="word-translate">{word.wordTranslate}</div>
            </div>
          </div>
        ))}
      </div>
      <WordsPagination/>
    </div>
  );
}
export default Schoolbook;
