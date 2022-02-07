import React, {useContext} from 'react';
import {Context} from  '../Context';

const Home = () => {
	const {handlerSetGroupInc, handlerSetGroupDecr, handlerGetWords, groups,words } = useContext(Context);
	return (
	<div className='home'>
		<button onClick={handlerSetGroupInc}> Set Group +</button>
        <button onClick={handlerSetGroupDecr}> Set Group -</button>
        <button onClick={handlerGetWords}>Get words</button>
        <div>{`Group = ${groups}`}</div>
        <div>{
          words.map(word =>
            <div className='words' key={word.id}>{`word is = ${word.word}`}</div>
            )
          }
        </div>
		</div>);
};
export default Home;
