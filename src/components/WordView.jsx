import React, { useContext } from 'react';
import { Context } from '../Context';
import '../components/wordView.css';

function WordView() {
 const {words, wordSchoolbook} = useContext(Context);;
 const newarr = words.filter( word => {
	 return word.word === wordSchoolbook;
 });

 const playAudioWord = () => {
	const audio = document.getElementById('audioWord');
	audio.play();
};
 const playAudioMeaning = () => {
	const audio = document.getElementById('audioMeaning');
	audio.play();
};
 const playAudioExample = () => {
	const audio = document.getElementById('audioExample');
	audio.play();
};
	return (
		<div className='word-view'>
		 {newarr.map( word => 
				 <div key={word.id} className="word-card-view">
					 <img src= {`https://rslang-team-16-server.herokuapp.com/${word.image}`} alt="word-img" width={280} />
					 <h2 className='word-view-word'>{word.word}</h2>
					 <div className='word-view-word-translate'>{word.wordTranslate}</div>
					 <div className='word-view-transctiption'>{word.transcription}</div>
					 <button className='word-view-btn' onClick={playAudioWord} >playWord</button>
					 <audio id='audioWord' src={`https://rslang-team-16-server.herokuapp.com/${word.audio}`}></audio>
					 <div>{word.textMeaning}</div>
					 <button className='word-view-btn' onClick={playAudioMeaning} >playMeaning</button>
					 <audio id='audioMeaning' src={`https://rslang-team-16-server.herokuapp.com/${word.audioMeaning}`}></audio>
					 <div className='word-view-text-meaning-translate'>{word.textMeaningTranslate}</div>
					 <div className='word-view-text-example'>{word.textExample}</div>
					 <button className='word-view-btn' onClick={playAudioExample} >playExample</button>
					 <audio id='audioExample' src={`https://rslang-team-16-server.herokuapp.com/${word.audioExample}`}></audio>
					 <div className='word-view-text-example-translate'>{word.textExampleTranslate}</div>
				 </div>)}
		</div>
	);
};
export default WordView



