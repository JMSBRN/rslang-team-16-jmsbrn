import React, { useContext } from 'react'
import { Context } from '../Context'
import '../components/wordView.css'

function WordView() {
 const {words, wordSchoolbook} = useContext(Context);
 const newarr = words.filter( word => {
	 return word.word === wordSchoolbook;
 });
	return (
		<div className='word-view'>
		 {newarr.map( word => 
				 <div key={word.id} className="word-card-view">
					 <img src= {word.image} alt="" />
					 <div>{word.word}</div>
					 <div>{word.wordTranslate}</div>
					 <div>{word.transcription}</div>
					 <div>{word.audio}</div>
					 <div>{word.textMeaning}</div>
					 <div>{word.textMeaningTranslate}</div>
					 <div>{word.textExample}</div>
					 <div>{word.textExampleTranslate}</div>
				 </div>)}
		</div>
	);
};
export default WordView



