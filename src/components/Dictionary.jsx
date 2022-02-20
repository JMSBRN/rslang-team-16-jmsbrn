import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Context } from '../Context';
import WordView from './WordView'

function Dictionary() {

const {
	stages,
	setStageNumToLocal,
	group,
	words,
	getWordsHandle,
	getWordValue
} =	useContext(Context);
useEffect(() => {
	getWordsHandle();
}, [group]);

const wordsToLearnFromLocal = JSON.parse(localStorage.getItem('wordToLearn'));
const newArr = words.filter((word) => {
		return word.word === wordsToLearnFromLocal[0] 
		|| word.word === wordsToLearnFromLocal[1]
		|| word.word === wordsToLearnFromLocal[2]
		|| word.word === wordsToLearnFromLocal[3]
		|| word.word === wordsToLearnFromLocal[4]
		|| word.word === wordsToLearnFromLocal[5]
		|| word.word === wordsToLearnFromLocal[6]
		|| word.word === wordsToLearnFromLocal[7]
		|| word.word === wordsToLearnFromLocal[8]
		|| word.word === wordsToLearnFromLocal[9]; 
	});
	const s = JSON.parse(localStorage.getItem('wordToLearn'));
	const removeWordFromLocal = (e) => {
	const item = 	`${e.target.dataset.rem}`;
	const newArr = s.filter(el => el !== item);
	localStorage.setItem('wordToLearn',JSON.stringify(newArr));
	window.location.reload();
	};

return (
	<div className="schoolbook">
		<div className="schoolbook-stages">
			{
			stages.map((stage) => (
					<button
						key={stage}
						onClick={setStageNumToLocal}
						data-num={stage - 1}
						className={`stage${stage-1}`}
					>{`stage ${stage}`}
					</button>
				))
			}
			<button className='stage'>
				<NavLink to={'/schoolbook'}>Schoolbook</NavLink>
			</button>
		</div>
		<div className="stage-title">Stage {group / 1 + 1}</div>
		<div className="dificult-words-title">Difficult words</div>
		<div className="words-container">
			<div className="words">
				{newArr.map((word) => (
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
							<div
							data-rem={word.word}
							className='dificult-words-remove-btn'
							onClick={removeWordFromLocal}
							>
								remove
							</div>: ''
						}
					</button>
				))}
			</div>
			<WordView />
		</div>
	</div>
	);
}

export default Dictionary