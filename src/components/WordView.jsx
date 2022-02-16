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
					 <img src= {`https://rslang-team-16-server.herokuapp.com/${word.image}`} alt="word-img" width={230} />
					 <div>{word.word}</div>
					 <div>{word.wordTranslate}</div>
					 <div>{word.transcription}</div>
					 <button onClick={playAudioWord} >playWord</button>
					 <audio id='audioWord' src={`https://rslang-team-16-server.herokuapp.com/${word.audio}`}></audio>
					 <div>{word.audio}</div>
					 <div>{word.textMeaning}</div>
					 <button onClick={playAudioMeaning} >playMeaning</button>
					 <audio id='audioMeaning' src={`https://rslang-team-16-server.herokuapp.com/${word.audioMeaning}`}></audio>
					 <div>{word.textMeaningTranslate}</div>
					 <div>{word.textExample}</div>
					 <button onClick={playAudioExample} >playExample</button>
					 <audio id='audioExample' src={`https://rslang-team-16-server.herokuapp.com/${word.audioExample}`}></audio>
					 <div>{word.textExampleTranslate}</div>
				 </div>)}
		</div>
	);
};
export default WordView



