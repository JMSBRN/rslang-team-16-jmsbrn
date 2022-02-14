import React, {useEffect, useContext } from "react";
import WordsPagination from "../components/WordsPagination";
import { Context } from "../Context";

function Schoolbook() {
  const { 
  getWordsHandle,
  words,
  handlerSetGroupInc,
  handlerSetGroupDecr
     }
  = useContext(Context);

     useEffect(() => {
      getWordsHandle();
     },[]);

  return (
    <div className="schoolbook">
      <div className="schoolbook-stages">
         <div className="stage">stage1</div>
         <div className="stage">stage2</div>
         <div className="stage">stage3</div>
         <div className="stage">stage4</div>
         <div className="stage">stage5</div>
         <div className="stage">stage6</div>
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
      <div className="btns">
        <button onClick={getWordsHandle}>words</button>
        <button onClick={handlerSetGroupDecr}>Groupe -</button>
        <button onClick={handlerSetGroupInc}>Groupe +</button>
      </div>
      <WordsPagination/>
    </div>
  );
}
export default Schoolbook;
