import './tableQuest.css';
import Done from '../../elements/don-svg/done';
import ButtonSprint from '../../elements/button/button-sprint';
import BackPackArray from '../BackPackArray';
import React, {useState } from 'react';
import { closure, badAnswers, calcSprint } from '../../constants/constants';



const TableQuest = () => {  
  let [doneClassName, setDoneClassName] = useState('done-sprint');
  let [doneColor, setDoneColor] = useState('red'); 
 
  const clickYes = () => { 
    sessionStorage.setItem('disabledYes', true);   
    sessionStorage.setItem('disabledNo', true);   
    doneClassName = 'done-sprint active';
    setDoneClassName(doneClassName)
    setTimeout(() => {
      setDoneClassName('done-sprint') 
    }, 400)
    const indexWord = sessionStorage.getItem('indexWord');
    const randomIndex = sessionStorage.getItem('randomIndex');
    if (indexWord === randomIndex) { 
      setDoneColor('green');
      calcSprint();
      closure();
    }else {
      setDoneColor('red');
      badAnswers();
    }
    console.log(disabledYes)
  }
    
  const clickNo = () => {

    sessionStorage.setItem('disabledYes', true) 
    sessionStorage.setItem('disabledNo', true) 
    doneClassName = 'done-sprint active';
    setDoneClassName(doneClassName)
    setTimeout(() => {
      setDoneClassName('done-sprint') 
    }, 400)
    const indexWord = sessionStorage.getItem('indexWord');
    const randomIndex = sessionStorage.getItem('randomIndex');
    if (indexWord === randomIndex) { 
      setDoneColor('red');
      badAnswers();
    }else {
      setDoneColor('green');
      calcSprint();
      closure();
    }
  }

  let indexSpeedSprint = sessionStorage.getItem('indexSpeedSprint');
  let disabledYes = Boolean(sessionStorage.getItem('disabledYes'));
  let disabledNo = Boolean(sessionStorage.getItem('disabledNo'));

  return (
    <div className='table-quest'>
      <div className='back-packs'>
       <BackPackArray indexSpeedSprint={
         !indexSpeedSprint ? indexSpeedSprint = 4 : indexSpeedSprint
        }/>
      </div>
      <div className={doneClassName}>
        <Done doneColor={doneColor} />
      </div>
      <div className='buttons-sprint'>
        <ButtonSprint name={'yes'} text={'Yes'} click={clickYes} disabled={!disabledYes ? disabledYes = false : disabledYes}/>        
        <ButtonSprint name={'no'} text={'No'} click={clickNo} 
        disabled={!disabledNo ? disabledNo = false : disabledNo}/>
      </div>
    </div>
  )
}
export default TableQuest;


